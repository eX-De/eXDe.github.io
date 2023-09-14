const messages = {
    en: {
        homepage:{
            nav: {
                language: '中文'
            },
            anchor:{
                name: 'Wenbei Xie',
                nick_name: 'eX-De',
                school: 'Beijing University of Technology',
                clickCopy: 'Click to copy',
                menu: {
                    home: 'Home',
                    pub: 'Publications',
                    proj: 'Projects',
                    book: 'Bookshelf'
                }
            }
        },
        homesubpage:{
            intro:{
                hello: 'Hi👋! Welcome to eX-De\'s personal homepage!',
                main1: 'I\'m currently an <b>4th grade undergraduate student</b> at <u>Beijing University of Technology</u> & <u>University College Dublin</u> who is majored in <b>Software Engineering</b> (2020-).During my university learning time, I have gained a comprehensive understanding of the whole subject area through the following courses.',
                coreCourseLearnt: 'Core Modules I Have Learned',
                main2: 'My research objective is to investigate and improve <b>inferential capability of language models</b>, especially Large Language Models. To make further progress on this objective, I believe it is necessary to apply our knowledge about <b>the procedure of human cognition</b> into the model design and development of other related techniques.',
                main3: 'As a 4th undergraduate student, I\'m currently looking for any opportunities of making research about <b>inferential capability of Large Language Models</b> in top universities around the world.'
            },
            tools:{
                title: 'Learned Skills & Tools'
            },
            selectProj:{
                label: 'Top Project',
                title: '<b>✨AI Daily✨</b>',
                intro1: 'AI Daily is a knowledge-sharing account operated by myself. The aim of AI Daily is to share one AI-related knowledge point everyday.',
                intro2: '✨AI Daily 2023 Autumn Vol. is publishing now✨'
            },
            selectPaper:{
                label: 'Top Publication',
                title: '<b>A particular problem founded on the inferential capability of LLMs</b>',
                intro1: 'Writing now. Will be published on arXiv in Oct. 2023.',
            }
        },
        bookpage:{
            tab:{
                books: 'Books',
                papers: 'Papers',
                webpages: 'Webpages'
            },
            books:[
                {
                    title: 'Deep Learning From Scratch',
                    description: 'The Chinese version of this book helps me a lot on the basic concepts in the AI field. Strongly recommend for every beginners. Only Chinese and Japanese versions are available.',
                    link1_des: 'Japan Ver.',
                    link2_des: 'Chinese Ver.'
                },
                {
                    title: 'A Brief History of Artificial Intelligence',
                        description: 'When I first began to enter the field of artificial intelligence, in order to have a more systematic understanding of the field of artificial intelligence, I think it is necessary to find a book to explain the history of artificial intelligence. A relatively new book on the market at present is this Brief History of Artificial Intelligence by Nick.',
                    link1_des: 'Chinese Ver.',
                    link2_des: ''
                }
            ],
            papers:[
                {description: 'The goal of this paper is to give language models the ability to generate something like chains of thought - a series of coherent intermediate reasoning steps that lead to a final answer to a question.'},
                {description: 'This article proposes REMEMBERER, which can selectively leverage the experiences stored in memory to optimize decisions based on the current state of the interaction. At the same time, experiential memory can be constantly updated through reinforcement learning processes.'},
                {description: 'This paper makes small models (less than 100B parameters) perform better on inference tasks by fine-tuning away some of the general capabilities.'},
                {description: 'This post is a survey of the current challenges encountered in the field of LLMs.'},
                {description: 'This article points out that LLMs tend to ignore intermediate context.'}
            ],
            webs:[
                {
                    title: 'Towards Complex Reasoning: the Polaris of Large Language Models',
                    description: 'A roadmap towards building language models of strong reasoning capabilties. Covers the full development stages: pretraining, continue training, supervised finetuning, reinforcemeng learning, chain-of-thought prompting, and evaluation.'
                }
            ]
        }
    },
    zh: {
        homepage:{
            nav: {
                language: 'English'
            },
            anchor:{
                name: '谢文贝',
                nick_name: 'eX-De',
                school: '北京工业大学',
                clickCopy: '点击复制',
                menu: {
                    home: '主页',
                    pub: '论文和文章',
                    proj: '项目',
                    book: '书架'
                }
            }
        },
        homesubpage:{
            intro:{
                hello: 'Hi👋! 欢迎来到eX-De的个人主页！',
                main1: '我目前是一名正在就读<u>北京工业大学</u>和<u>都柏林大学学院</u>联合学士学位的<b>大四</b>学生。我的专业是<b>软件工程</b>。在我的大学学习生活中，我通过如下的课程对本领域的知识有了一定的理解。',
                coreCourseLearnt: '核心课程列表',
                main2: '我的研究目标是研究和提高语言模型，特别是大型语言模型的<b>推理能力</b>。为了在这一目标上取得进展，我认为有必要将我们对<b>人类认知的过程</b>的知识应用到模型设计和其他相关技术的研发中。',
                main3: '作为大四的学生，我目前正在寻找在世界各地的顶尖大学中研究<b>大型语言模型推理能力</b>的机会。'
            },
            tools:{
                title: '学过的工具和技术'
            },
            selectProj:{
                label: '置顶项目',
                title: '<b>✨AI Daily✨</b>',
                intro1: 'AI Daily是由我个人运营的知识分享账号，致力于每天分享一个AI领域的知识点。',
                intro2: '✨目前AI Daily 2023 秋季专辑正在更新中✨'
            },
            selectPaper:{
                label: '置顶论文',
                title: '<b>大语言模型推理性能的某个问题</b>',
                intro1: '正在书写中，预计于2023年10月份发表在arXiv上',
            }
        },
        bookpage:{
            tab:{
                books: '书籍和文章',
                papers: '论文',
                webpages: '网页'
            },
            books:[
                {
                    title: '深度学习入门：基于Python的理论与实现',
                    description: '这本书帮助我了解了很多AI领域的基础知识。它简单易懂，循循善诱，非常推荐初学者阅读。目前只有中文版和英文版。',
                    link1_des: '日文版',
                    link2_des: '中文版'
                },
                {
                    title: '人工智能简史',
                    description: '在我刚开始入门人工智能领域的时候，为了对人工智能领域有一个比较系统的认识，我认为有必要找到一本书来讲解一下人工智能的发展史。目前在市面上比较新的书就是这本由尼克所著的《人工智能简史》。',
                    link1_des: '中文版',
                    link2_des: ''
                }
            ],
            papers:[
                {description: '本文的目标是赋予语言模型生成类似思维链的能力——一系列连贯的中间推理步骤，从而得出问题的最终答案。'},
                {description: '本文提出了REMEMBERER，它可以根据当前交互状态选择性地利用记忆中存储的经验来优化决策。同时，经验记忆可以通过强化学习过程不断更新。'},
                {description: '这篇文章通过微调抛弃一部分通用能力来让小型的模型（参数量小于100B）也能在推理任务上有更好的表现。'},
                {description: '这篇文章是对目前语言大模型领域遇到的挑战的一篇综述。'},
                {description: '这篇文章指出了大模型会倾向于忽略中间的上下文。'}
            ],
            webs:[
                {
                    title: '复杂推理：大语言模型的北极星能力',
                    description: '构建具有强大推理能力的语言模型的路线图。涵盖了完整的开发阶段:预训练、继续训练、有监督的微调、强化学习、思维链提示和评估。'
                }
            ]
        }
    }
}

export {
    messages
}