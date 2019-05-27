const loadProducts = new Promise((resolve) => {
    setTimeout(() => {
        resolve([
            {
                'id': '1000',
                'title': 'Machine Learning',
                'price': 47.99,
                'level': 'Advanced',
                'description': 'Interested in the field of Machine Learning? Then this course is for you!This course has been designed by two professional Data Scientists so that we can share our knowledge and help you learn complex theory, algorithms and coding libraries in a simple way.'
            },
            {
                'id': '1001',
                'title': 'Microsoft Excel',
                'price': 19.99,
                'level': 'Beginner',
                'description': 'You will have mastered the most popular Excel tools and come out with confidence to complete any Excel tasks with efficiency and grace. These are just a few of the topics that you will master: Creating effective spreadsheets, anaging large sets of data'
            },
            {
                'id': '1002',
                'title': 'React Native',
                'price': 25.99,
                'level': 'Advanced',
                'description': 'Mobile applications are one of the best ways to engage with users - no wonder everyone wants to build one! Wouldn\'t it be great if you could use your web development knowledge, combined with your React knowledge, to build mobile apps with that?'
            },
            {
                'id': '1003',
                'title': 'Digital Marketing',
                'price': 27.99,
                'level': 'Beginner',
                'description': 'With over 20 hours of training, quizzes and practical steps you can follow - this is one of the most comprehensive digital marketing courses available. We\'ll cover SEO, YouTube Marketing, Facebook Marketing, Google Adwords, Google Analytics and more!'
            }
        ]);
    }, 100);
});

export {loadProducts};
