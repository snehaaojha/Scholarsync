// Example basic match score calculator
function calculateMatchScore(user, scholarship) {
    let score = 0;
  
    if (user.educationLevel === scholarship.eligibility.educationLevel) score += 1;
    if (scholarship.tags.some(tag => user.interests.includes(tag))) score += 1;
    if (user.location === scholarship.eligibility.location) score += 1;
    if (user.incomeBracket <= scholarship.eligibility.incomeRequirement) score += 1;
  
    return score;
  }