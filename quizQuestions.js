var quizQuestions = [
    {
        "moduleName": "Introduction",
        "questionNo": 1,
        "questionType": "multiple choice",
        "question": "True or false: there are only two ways to communicate the gospel.",
        "options": ["True", "False"],
        "answer": ["False"],
        "correctMessage": "Yes, correct. While the gospel is a message with core points, there are many ways to communicate it."
    },
    {
        "moduleName": "Introduction",
        "questionNo": 2,
        "questionType": "multiple choice",
        "question": "What was the suggested 'simplest' way of articulating the gospel?",
        "options": ["Jesus died", "Jesus is lord", "God is our maker", "Be happy"],
        "answer": ["Jesus is lord"],
        "correctMessage": "Yes. Some suggest that this is the simplest version of the core gospel message."
    },
    {
        "moduleName": "God our maker",
        "questionNo": 1,
        "questionType": "multiple choice",
        "question": "What do the first few chapters of Genesis aim to give us primarily?",
        "options": ["A theological account of God and people", "A scientific treatise of the origins of matter", "An historical recount of the first humans"],
        "answer": ["A theological account of God and people"],
        "correctMessage": "That's right—the creation account of Genesis is primarily about providing a view of God, people and our world."
    },
    {
        "moduleName": "God our maker",
        "questionNo": 2,
        "questionType": "multiple choice",
        "question": "What words accurately describe the way in which God creates in the Bible?",
        "options": ["Lovingly", "Recklessly", "Powerfully", "Randomly"],
        "answer": ["Lovingly", "Powerfully"],
        "correctMessage": "Yes. That's correct."
    },
    {
        "moduleName": "God our maker",
        "questionNo": 3,
        "questionType": "multiple choice",
        "question": "Which example was given to show how God's creative activity is used within evangelism in the New Testament?",
        "options": ["Peter's speech in Acts 2", "Paul's speech in Acts 17", "The opening of John's gospel"],
        "answer": ["Paul's speech in Acts 17"],
        "correctMessage": "Yes—Paul describes God as the one who gives life to everyone."
    },
    {
        "moduleName": "God our enemy",
        "questionNo": 1,
        "questionType": "multiple choice",
        "question": "How is sin described in the Bible?",
        "options": ["Not loving others as we ought", "Not loving God as we ought", "Not doing the good we know we ought to do", "A universal problem"],
        "answer": ["Not loving others as we ought", "Not loving God as we ought", "Not doing the good we know we ought to do", "A universal problem"],
        "correctMessage": "Yes, these are all ways in which the Bible describes sin."
    },
    {
        "moduleName": "God our enemy",
        "questionNo": 2,
        "questionType": "multiple choice",
        "question": "What does sin lead to?",
        "options": ["Forgiveness", "Death", "Wealth", "Separation from God"],
        "answer": ["Death", "Separation from God"],
        "correctMessage": "Yes. That's correct."
    },
    {
        "moduleName": "God our enemy",
        "questionNo": 3,
        "questionType": "multiple choice",
        "question": "What image does C.S. Lewis use to describe sinners?",
        "options": ["Children in debt to their parents", "Rebels who must lay down their arms", "Dogs stuck in a great storm"],
        "answer": ["Rebels who must lay down their arms"],
        "correctMessage": "Yes—the Bible portrays sin's remedy as not a small moral improvement, but a total renovation of the heart."
    },
    {
        "moduleName": "God our saviour",
        "questionNo": 1,
        "questionType": "multiple choice",
        "question": "What makes Jesus' our saviour?",
        "options": ["His life", "His death", "His resurrection", "His surname"],
        "answer": ["His life", "His death", "His resurrection"],
        "correctMessage": "Yes, Jesus' perfect obedience, substitutionary death, and bodily resurrection are all part of his saving work."
    },
    {
        "moduleName": "God our saviour",
        "questionNo": 2,
        "questionType": "multiple choice",
        "question": "How does the Bible describe salvation?",
        "options": ["An undeserved gift", "A one-time offer", "Eternal life"],
        "answer": ["An undeserved gift", "Eternal life"],
        "correctMessage": "Yes. That's correct."
    },
    {
        "moduleName": "God our saviour",
        "questionNo": 3,
        "questionType": "multiple choice",
        "question": "According to Jonathan Edwards, what do we contribute to our salvation?",
        "options": ["Ongoing allegiance to Christ", "The sin that made it necessary", "Financial generosity"],
        "answer": ["The sin that made it necessary"],
        "correctMessage": "Yes—God is the one who accomplishes salvation for His people."
    },
    {
        "moduleName": "God our saviour",
        "questionNo": 4,
        "questionType": "multiple choice",
        "question": "What does salvation lead to?",
        "options": ["A new life in the here and now", "Eternal life", "Complacency"],
        "answer": ["A new life in the here and now", "Eternal life"],
        "correctMessage": "That's right. Being saved from sin impacts our lives now and forever."
    },
    {
        "moduleName": "God our friend",
        "questionNo": 1,
        "questionType": "multiple choice",
        "question": "What does friendship with God involve?",
        "options": ["Speaking to Him", "Listening to Him", "Drinking coffee together", "Trusting Him"],
        "answer": ["Speaking to Him", "Listening to Him", "Trusting Him"],
        "correctMessage": "That's right. Although I guess if God is everywhere, maybe you can drink coffee together."
    },
    {
        "moduleName": "God our friend",
        "questionNo": 2,
        "questionType": "multiple choice",
        "question": "What did St. Augustine say which conveys our need for God?",
        "options": ["I need God like I need my morning coffee!", "Our heart is restless until it rests in you"],
        "answer": ["Our heart is restless until it rests in you"],
        "correctMessage": "That's right."
    },
    {
        "moduleName": "God our friend",
        "questionNo": 3,
        "questionType": "multiple choice",
        "question": "What does the apostle Peter exhort believers to do at the end of 2 Peter?",
        "options": ["Be generous to your neighbours", "Turn from idols", "Grow in the grace and knowledge of Jesus"],
        "answer": ["Grow in the grace and knowledge of Jesus"],
        "correctMessage": "Yes, being God's friend involves growing to be more like Jesus."
    },
    {
        "moduleName": "Your story beginning",
        "questionNo": 1,
        "questionType": "personal response",
        "question": "Write a couple of sentences on your life before you became a Christian. What did you believe? What did you value in life? How did you live?",
        "localStorageName": "yourStoryBeginning"
    },
    {
        "moduleName": "Your story middle",
        "questionNo": 1,
        "questionType": "personal response",
        "question": "Write a couple of sentences on what happened to help you become a Christian. What were the key moments, verses, people, experiences? What did you come to believe about Jesus?",
        "localStorageName": "yourStoryMiddle"
    },
    {
        "moduleName": "Your story end",
        "questionNo": 1,
        "questionType": "personal response",
        "question": "Write a couple of sentences on how becoming a Christian changed your life afterwards. What changed in the way you think and act? What changed about what you value in life?",
        "localStorageName": "yourStoryEnd"
    },
    {
        "moduleName": "Their story bible",
        "questionNo": 1,
        "questionType": "multiple choice",
        "question": "What does the Apostle John say about those without faith in Jesus?",
        "options": ["They won't see life", "They will be saved", "Don't worry about them", "God's wrath remains on them"],
        "answer": ["They won't see life", "God's wrath remains on them"],
        "correctMessage": "Yes, these are sobering descriptions."
    },
    {
        "moduleName": "Their story bible",
        "questionNo": 2,
        "questionType": "multiple choice",
        "question": "According to the Apostle Peter, why hasn’t Jesus returned yet?",
        "options": ["God is patient", "God is building anticipation", "God wants all to come to repentance", "Jesus has already returned secretly"],
        "answer": ["God is patient", "God wants all to come to repentance"],
        "correctMessage": "Yes, that's correct."
    },
    {
        "moduleName": "Their story bible",
        "questionNo": 3,
        "questionType": "multiple choice",
        "question": "According to Paul’s letter to Timothy, what does God desire for all people?",
        "options": ["That they get what they deserve", "That they are saved", "That they know the truth"],
        "answer": ["That they get what they deserve", "That they know the truth"],
        "correctMessage": "Yes, correct."
    },
    {
        "moduleName": "Their story they say",
        "questionNo": 1,
        "questionType": "multiple choice",
        "question": "According to the 2023 study cited, what is the age group in Australia most likely to report feelings of loneliness?",
        "options": ["18-24", "35-49", "55-64"],
        "answer": ["18-24"],
        "correctMessage": "Yes, correct."
    },
    {
        "moduleName": "Their story they say",
        "questionNo": 2,
        "questionType": "multiple choice",
        "question": "According to the 2023 study cited, approximately what fraction of Australians struggle with substance addiction (alcohol or illicit drugs)?",
        "options": ["1 in 10", "1 in 20", "1 in 100"],
        "answer": ["1 in 20"],
        "correctMessage": "Yes, correct."
    },
    {
        "moduleName": "Their story they say",
        "questionNo": 3,
        "questionType": "multiple choice",
        "question": "True or false: the gospel has nothing to offer people struggling with loneliness and/or addiction.",
        "options": ["True", "False"],
        "answer": ["True"],
        "correctMessage": "Yes, correct."
    },
    {
        "moduleName": "Towards evangelism praying",
        "questionNo": 1,
        "questionType": "multiple choice",
        "question": "What's a recommended first step towards praying for your non-Christian contacts?",
        "options": ["List the non-Christian people you encounter regularly", "Text them all asking for prayer points"],
        "answer": ["List the non-Christian people you encounter regularly"],
        "correctMessage": "Yes, this is a good step. This is a good activity to try."
    },
    {
        "moduleName": "Towards evangelism praying",
        "questionNo": 2,
        "questionType": "multiple choice",
        "question": "Which line of the Lord’s Prayer was cited as having a ‘missional’ tone?",
        "options": ["Give us this day our daily bread", "Hallowed be your name", "Lead us not into temptation"],
        "answer": ["Hallowed be your name"],
        "correctMessage": "Yes, correct."
    },
    {
        "moduleName": "Towards evangelism living",
        "questionNo": 1,
        "questionType": "multiple choice",
        "question": "According to the bit of the Sermon on the Mount cited, what might cause non-believers to glorify God?",
        "options": ["Miracles", "Compelling music", "Your good deeds"],
        "answer": ["Your good deeds"],
        "correctMessage": "Yes, correct."
    }, 
    {
        "moduleName": "Towards evangelism living",
        "questionNo": 2,
        "questionType": "multiple choice",
        "question": "According to the Apostle Peter, what flows from revering Christ as Lord?",
        "options": ["Being prepared to debate non-Christians", "Being prepared to give an answer for your hope", "Gentleness and Respect"],
        "answer": ["Being prepared to give an answer for your hope", "Gentleness and Respect"],
        "correctMessage": "Yes, correct."
    },
    {
        "moduleName": "Towards evangelism living",
        "questionNo": 3,
        "questionType": "multiple choice",
        "question": "What image does Paul use to explain what our speech should be like toward outsiders?",
        "options": ["Firm like a log", "Seasoned with salt", "Sharp as an arrow", "Gentle like the breeze"],
        "answer": ["Seasoned with salt"],
        "correctMessage": "Yes, correct."
    },
    {
        "moduleName": "Towards evangelism together",
        "questionNo": 1,
        "questionType": "multiple choice",
        "question": "What analogy is used to describe the church, which might demonstrate that we need to work as a team in our evangelism?",
        "options": ["Church as a tree", "Church as a plane", "Church as a body"],
        "answer": ["Church as a body"],
        "correctMessage": "Yes, this analogy might suggest that teamwork is necessary."
    },
    {
        "moduleName": "Towards evangelism together",
        "questionNo": 2,
        "questionType": "multiple choice",
        "question": "What is a recommended step if your church hosts its own evangelistic course?",
        "options": ["Familiarise yourself with it", "Make flyers for it", "Start a different course"],
        "answer": ["Familiarise yourself with it"],
        "correctMessage": "Yes, it's good for you to know as much as you can about it, to give you confidence to invite others."
    },
    {
        "moduleName": "Towards evangelism together",
        "questionNo": 3,
        "questionType": "multiple choice",
        "question": "What is a recommended step if your church doesn’t host its own evangelistic course?",
        "options": ["Pray for one", "Discuss the possibility of one with church staff", "Start one yourself without telling anyone"],
        "answer": ["Discuss the possibility of one with church staff"],
        "correctMessage": "Yes, it's good to get an idea of how feasible it is with your church staff. Although prayer is also a good step."
    }
] 