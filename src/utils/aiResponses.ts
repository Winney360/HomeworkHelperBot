interface SubjectContent {
  [key: string]: {
    [grade: number]: string[];
  };
}

const cbcContent: SubjectContent = {
  mathematics: {
    1: [
      "Let's count together! For this problem, we can use our fingers to help count.",
      "Great question! In Grade 1, we learn about numbers 1-20. Let me break this down step by step.",
      "This is a wonderful math problem! Let's solve it using simple addition with objects you can see around you.",
      "I can help you with this! Let's use pictures and drawings to understand this better."
    ],
    2: [
      "Excellent! In Grade 2, we work with numbers up to 100. Let me show you an easy way to solve this.",
      "This is a good problem for Grade 2! Let's use place value to understand this better.",
      "Great job asking! We can solve this using counting in 2s, 5s, and 10s.",
      "Perfect question! Let's break this down using addition and subtraction strategies."
    ],
    3: [
      "Wonderful! In Grade 3, we explore multiplication and division. Let me explain this clearly.",
      "This is exactly what Grade 3 students should be learning! Let's use repeated addition to solve this.",
      "Excellent question! We can solve this using our knowledge of times tables.",
      "Great problem! Let's use arrays and groups to understand this multiplication."
    ],
    4: [
      "Perfect for Grade 4! Let's use our knowledge of fractions to solve this problem.",
      "This is a great Grade 4 question! We can use long division to find the answer.",
      "Excellent! Let's explore this using our understanding of decimals and place value.",
      "Wonderful question! We can solve this step by step using multiple strategies."
    ],
    5: [
      "Fantastic Grade 5 question! Let's use our knowledge of percentages and ratios.",
      "This is perfect for Grade 5! We can solve this using algebraic thinking.",
      "Great problem! Let's use our understanding of geometry and measurement.",
      "Excellent question! We can break this down using problem-solving strategies."
    ],
    6: [
      "Perfect for Grade 6! Let's use our knowledge of integers and coordinate geometry.",
      "This is a great Grade 6 question! We can solve this using proportional relationships.",
      "Wonderful! Let's explore this using our understanding of area and volume.",
      "Excellent problem! We can use equations and inequalities to solve this."
    ],
    7: [
      "Fantastic Grade 7 question! Let's use our knowledge of probability and statistics.",
      "This is perfect for Grade 7! We can solve this using linear equations.",
      "Great problem! Let's use our understanding of similar figures and scale.",
      "Excellent question! We can break this down using mathematical reasoning."
    ],
    8: [
      "Perfect for Grade 8! Let's use our knowledge of quadratic expressions.",
      "This is a great Grade 8 question! We can solve this using the Pythagorean theorem.",
      "Wonderful! Let's explore this using our understanding of functions and graphs.",
      "Excellent problem! We can use systems of equations to solve this."
    ],
    9: [
      "Fantastic Grade 9 question! Let's use our knowledge of advanced algebra.",
      "This is perfect for Grade 9! We can solve this using trigonometry.",
      "Great problem! Let's use our understanding of exponential and logarithmic functions.",
      "Excellent question! We can break this down using calculus concepts."
    ]
  },
  english: {
    1: [
      "Let's practice reading together! I'll help you sound out each word slowly.",
      "Great question! In Grade 1, we learn about letters and sounds. Let me help you with this.",
      "This is wonderful! Let's work on this spelling together, letter by letter.",
      "Perfect! Let's practice writing this sentence with proper spacing and punctuation."
    ],
    2: [
      "Excellent! In Grade 2, we learn about sentence structure. Let me help you build this sentence.",
      "This is a great question! Let's work on this story together, focusing on the beginning, middle, and end.",
      "Wonderful! Let's practice this reading comprehension by discussing what we read.",
      "Perfect question! Let's work on this grammar rule with simple examples."
    ],
    3: [
      "Great job! In Grade 3, we explore different types of writing. Let me help you with this paragraph.",
      "This is perfect for Grade 3! Let's work on this vocabulary word and use it in sentences.",
      "Excellent question! Let's practice this reading skill by looking for key details.",
      "Wonderful! Let's work on this grammar concept with fun examples."
    ],
    4: [
      "Perfect for Grade 4! Let's work on this essay structure with clear introduction and conclusion.",
      "This is a great Grade 4 question! Let's explore this literature piece together.",
      "Excellent! Let's practice this writing technique and make your story more interesting.",
      "Wonderful question! Let's work on this language concept step by step."
    ],
    5: [
      "Fantastic Grade 5 question! Let's work on this persuasive writing together.",
      "This is perfect for Grade 5! Let's analyze this text and find the main themes.",
      "Great question! Let's practice this grammar rule and use it in complex sentences.",
      "Excellent! Let's work on this vocabulary and explore word relationships."
    ],
    6: [
      "Perfect for Grade 6! Let's work on this creative writing piece with descriptive language.",
      "This is a great Grade 6 question! Let's analyze this poem and discuss its meaning.",
      "Wonderful! Let's practice this research skill and find reliable sources.",
      "Excellent question! Let's work on this presentation and make it engaging."
    ],
    7: [
      "Fantastic Grade 7 question! Let's work on this argumentative essay with strong evidence.",
      "This is perfect for Grade 7! Let's explore this literary device and how authors use it.",
      "Great question! Let's practice this writing style and develop your voice.",
      "Excellent! Let's work on this critical thinking skill and analyze different perspectives."
    ],
    8: [
      "Perfect for Grade 8! Let's work on this research paper with proper citations.",
      "This is a great Grade 8 question! Let's analyze this complex text and its themes.",
      "Wonderful! Let's practice this advanced grammar concept with sophisticated examples.",
      "Excellent question! Let's work on this presentation skill and audience engagement."
    ],
    9: [
      "Fantastic Grade 9 question! Let's work on this literary analysis with deep interpretation.",
      "This is perfect for Grade 9! Let's explore this advanced writing technique.",
      "Great question! Let's practice this critical reading skill and textual analysis.",
      "Excellent! Let's work on this college-prep writing with advanced vocabulary."
    ]
  },
  science: {
    1: [
      "Let's explore science together! In Grade 1, we learn about living and non-living things.",
      "Great question! Let's discover this by observing what's around us.",
      "This is wonderful! Let's use our five senses to explore this science concept.",
      "Perfect! Let's do a simple experiment to understand this better."
    ],
    2: [
      "Excellent! In Grade 2, we explore plants and animals. Let me help you understand this.",
      "This is a great question! Let's learn about weather and seasons together.",
      "Wonderful! Let's explore this concept about matter and materials.",
      "Perfect question! Let's investigate this simple machine together."
    ],
    3: [
      "Great job! In Grade 3, we study life cycles and habitats. Let me explain this clearly.",
      "This is perfect for Grade 3! Let's explore this concept about forces and motion.",
      "Excellent question! Let's learn about the solar system and space.",
      "Wonderful! Let's investigate this concept about light and sound."
    ],
    4: [
      "Perfect for Grade 4! Let's explore this concept about ecosystems and food chains.",
      "This is a great Grade 4 question! Let's learn about the water cycle.",
      "Excellent! Let's investigate this concept about electricity and magnetism.",
      "Wonderful question! Let's explore this topic about rocks and minerals."
    ],
    5: [
      "Fantastic Grade 5 question! Let's explore this concept about body systems.",
      "This is perfect for Grade 5! Let's learn about chemical and physical changes.",
      "Great question! Let's investigate this concept about energy and its forms.",
      "Excellent! Let's explore this topic about Earth's processes and changes."
    ],
    6: [
      "Perfect for Grade 6! Let's explore this concept about cells and microorganisms.",
      "This is a great Grade 6 question! Let's learn about genetics and heredity.",
      "Wonderful! Let's investigate this concept about atoms and molecules.",
      "Excellent question! Let's explore this topic about environmental science."
    ],
    7: [
      "Fantastic Grade 7 question! Let's explore this concept about evolution and classification.",
      "This is perfect for Grade 7! Let's learn about chemical reactions and equations.",
      "Great question! Let's investigate this concept about waves and electromagnetic spectrum.",
      "Excellent! Let's explore this topic about climate change and sustainability."
    ],
    8: [
      "Perfect for Grade 8! Let's explore this concept about genetics and biotechnology.",
      "This is a great Grade 8 question! Let's learn about periodic table and chemical bonding.",
      "Wonderful! Let's investigate this concept about motion and forces in detail.",
      "Excellent question! Let's explore this topic about astronomy and space exploration."
    ],
    9: [
      "Fantastic Grade 9 question! Let's explore this advanced concept in biology.",
      "This is perfect for Grade 9! Let's learn about advanced chemistry concepts.",
      "Great question! Let's investigate this concept in physics and engineering.",
      "Excellent! Let's explore this topic about environmental science and sustainability."
    ]
  }
};

export const generateAIResponse = (question: string, grade: number, messageType: string = 'text'): string => {
  const lowerQuestion = question.toLowerCase();
  let subject = 'general';
  let responses: string[] = [];

  // Determine subject based on keywords
  if (lowerQuestion.includes('math') || lowerQuestion.includes('add') || lowerQuestion.includes('subtract') || 
      lowerQuestion.includes('multiply') || lowerQuestion.includes('divide') || lowerQuestion.includes('number')) {
    subject = 'mathematics';
  } else if (lowerQuestion.includes('read') || lowerQuestion.includes('write') || lowerQuestion.includes('spell') || 
             lowerQuestion.includes('sentence') || lowerQuestion.includes('story') || lowerQuestion.includes('english')) {
    subject = 'english';
  } else if (lowerQuestion.includes('science') || lowerQuestion.includes('plant') || lowerQuestion.includes('animal') || 
             lowerQuestion.includes('experiment') || lowerQuestion.includes('nature')) {
    subject = 'science';
  }

  // Get appropriate responses
  if (cbcContent[subject] && cbcContent[subject][grade]) {
    responses = cbcContent[subject][grade];
  } else {
    // Fallback responses
    responses = [
      `That's a great question for Grade ${grade}! Let me help you understand this step by step.`,
      `Excellent question! For a Grade ${grade} student, here's how we can approach this...`,
      `Perfect! This is exactly what Grade ${grade} students should be learning about.`,
      `Wonderful question! Let me break this down in a way that's perfect for Grade ${grade}.`
    ];
  }

  // Add context based on message type
  let contextPrefix = '';
  if (messageType === 'voice') {
    contextPrefix = "I heard your question! ";
  } else if (messageType === 'image') {
    contextPrefix = "I can see the homework in your image! ";
  } else if (messageType === 'file') {
    contextPrefix = "I've reviewed your homework file! ";
  }

  // Select random response and add helpful continuation
  const baseResponse = responses[Math.floor(Math.random() * responses.length)];
  
  const helpfulContinuations = [
    " Would you like me to explain this in a different way?",
    " Do you have any specific part you'd like me to focus on?",
    " Should I break this down into smaller steps?",
    " Would you like to try a practice problem together?",
    " Let me know if you need help with any specific part!"
  ];

  const continuation = helpfulContinuations[Math.floor(Math.random() * helpfulContinuations.length)];

  return contextPrefix + baseResponse + continuation;
};