const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.gradeTestSubmission = functions.firestore
  .document('testResults/{resultId}')
  .onCreate(async (snap, context) => {
    const result = snap.data();
    const testId = result.testId;
    
    // Get test questions
    const testDoc = await admin.firestore().collection('tests').doc(testId).get();
    const test = testDoc.data();
    
    let score = 0;
    let total = test.questions.length;
    
    result.answers.forEach(answer => {
      const question = test.questions.find(q => q.id === answer.questionId);
      if (question && answer.answer === question.correctAnswer) {
        score++;
      }
    });
    
    const percentage = Math.round((score / total) * 100);
    
    // Update result
    await admin.firestore().collection('testResults').doc(context.params.resultId).update({
      score: percentage,
      isGraded: true
    });
    
    // Update test stats
    const testRef = admin.firestore().collection('tests').doc(testId);
    const testSnap = await testRef.get();
    const testStats = testSnap.data();
    
    const newAttempts = testStats.attempts + 1;
    const newAvgScore = ((testStats.avgScore * (newAttempts - 1)) + percentage) / newAttempts;
    
    await testRef.update({
      attempts: newAttempts,
      avgScore: newAvgScore
    });
    
    // Optional: Send email to student
    const studentDoc = await admin.firestore().collection('students').doc(result.studentId).get();
    const student = studentDoc.data();
    
    // Use email service like SendGrid here
    console.log(`Graded test for ${student.email}: ${percentage}%`);
  });