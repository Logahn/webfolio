import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

import "./content.scss";

const StudyJourney = () => {
  return (
    <>
      <div className="app__hero app__flex">
        <h1 className="blog-header-text">Learning Journey</h1>

        <img src={images.studyJourney_header} alt="svm_header" />
      </div>

      <div className="app__writeup">
        <p>
          In this blog post, I will be sharing my AI/ML learning experience with
          you. I have handpicked a list of books that have played a significant
          role in shaping my understanding of Artificial Intelligence and
          Machine Learning. Not only that, but I also intend to give you a
          glimpse into each book, along with my personal reflections on how they
          have contributed to my growth as an AI/ML enthusiast. As I am just
          starting out on my journey, you can expect this blog post to be
          updated frequently.
          <br></br>
        </p>
        <p>
          <a href="https://www.amazon.com/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/1491962291">
            <b>
              1. Hands-On Machine Learning with Scikit-Learn and TensorFlow by
              Aurélien Géron
            </b>
          </a>
        </p>
        <img src={images.book1} alt="book1" />

        <p>
          <br></br>
          Hands-On Machine Learning with Scikit-Learn and TensorFlow is an
          exceptional guide that provides a practical approach to building
          machine learning models with two of the most widely used Python
          frameworks: Scikit-Learn and TensorFlow.
          <br></br>
          <br></br>The book is an incredible resource that teaches you the
          basics of machine learning, which includes supervised learning,
          unsupervised learning, and reinforcement learning. Additionally, the
          book also covers the two primary Python frameworks for machine
          learning, Scikit-Learn and TensorFlow. You will learn how to build
          machine learning models and how to train, evaluate, and tune these
          models. The book also guides you on how to deploy machine learning
          models in production and how you can use machine learning to solve
          real-world problems.
          <br></br>Apart from the practical knowledge, the book also includes
          helpful resources such as a list of datasets and a glossary of terms
          that will be useful for your learning journey.
          <br></br>
          <br></br>Hands-On Machine Learning with Scikit-Learn and TensorFlow is
          an excellent resource for anyone who wants to learn about building
          machine learning models using Python. Some of the ways that this book
          can help you are by giving you a solid foundation in the basics of
          machine learning, teaching you how to use two of the most popular
          Python frameworks for machine learning, helping you to build and
          deploy machine learning models, and giving you insights into how
          machine learning can be used to solve real-world problems.
          <br></br>
          <br></br>
        </p>

        <p>
          <a href="https://www.amazon.com/Deep-Learning-Adaptive-Computation-Machine/dp/0262035618/ref=sr_1_1?ie=UTF8&qid=1472485235&sr=8-1&keywords=deep+learning+book">
            <b>
              2.Deep Learning" by Ian Goodfellow, Yoshua Bengio, and Aaron
              Courville
            </b>
          </a>
        </p>
        <img src={images.book2} alt="book1" />

        <p>
          <br></br>
          The book offers a vast array of knowledge on the basics of deep
          learning, which includes neural networks, backpropagation, and
          optimization algorithms. It also provides comprehensive guidance on
          constructing deep learning models for various tasks, such as image
          classification, natural language processing, and speech recognition.
          It also instructs you on how to assess and improve the performance of
          deep learning models, as well as how to apply deep learning to tackle
          real-world problems, the book contains several practical resources
          that can aid your learning journey in AI and ML. Among these resources
          are datasets and a glossary of essential terms. These tools can be
          incredibly helpful in developing your understanding of deep learning
          and related fields.
          <br></br>
          <br></br>By reading this book, you can establish a firm foundation in
          the basics of deep learning and gain the skills to build deep learning
          models for various tasks. You will also learn how to evaluate and
          improve the performance of deep learning models, as well as how to use
          deep learning to tackle real-world problems. This book can provide you
          with valuable insights into the world of deep learning and help you to
          develop a comprehensive understanding of the topic. <br></br>
          <br></br>I highly recommend it to anyone who wants to gain a
          comprehensive understanding of deep learning and related fields. With
          this book by your side, you can take your knowledge of deep learning
          to new heights and make significant contributions to the field.
          <br></br>
          <br></br>
        </p>

        <p>
          <a href="https://www.amazon.com/Deep-Learning-Adaptive-Computation-Machine/dp/0262035618/ref=sr_1_1?ie=UTF8&qid=1472485235&sr=8-1&keywords=deep+learning+book">
            <b>
              3.Pattern Recognition and Machine Learning by Christopher M.
              Bishop
            </b>
          </a>
        </p>
        <img src={images.book3} alt="book3" />

        <p>
          <br></br>
          This book is an excellent resource for acquiring fundamental knowledge
          about AI and ML. The book comprehensively covers various topics,
          including mathematical fundamentals, pattern recognition techniques,
          Bayesian methods, neural networks, model evaluation and optimization,
          and research directions. It provides a solid understanding of
          probability theory, linear algebra, and optimization techniques, which
          are crucial for building and understanding machine learning models.
          Additionally, the book covers a wide range of pattern recognition
          techniques, including clustering, dimensionality reduction, and
          classification.
          <br></br>
          It also provides a detailed explanation of neural networks, their
          architectures, and training algorithms, including feedforward neural
          networks, backpropagation, and regularization techniques. The book
          emphasizes the importance of model evaluation and optimization,
          discussing techniques such as cross-validation, bias-variance
          tradeoff, and hyperparameter tuning.
          <br></br>
          Practical examples and exercises are included to reinforce the
          concepts, and emerging research areas and challenges in machine
          learning are also discussed. Overall, it serves as a valuable
          reference throughout your learning journey, enabling you to develop
          and apply advanced machine learning models and algorithms effectively.
          <br></br>
          <br></br>
        </p>

        <p>
          <a href="https://www.amazon.nl/Hundred-Page-Machine-Learning-Book/dp/1999579518">
            <b>4.The Hundred-Page Machine Learning Book by Andriy Burkov</b>
          </a>
        </p>
        <img src={images.book4} alt="book4" />

        <p>
          <br></br>
          This is a concise but comprehensive guide to machine learning that
          covers essential topics and provides a strong foundation for your AI
          and ML learning journey. The book introduces you to fundamental
          concepts and terminology in machine learning, including supervised
          learning, unsupervised learning, and reinforcement learning.
          <br></br>
          Additionally, it explains various machine learning algorithms and
          techniques, such as linear regression, logistic regression, decision
          trees, k-nearest neighbors, support vector machines, and neural
          networks, and their applications in real-world scenarios. You will
          also learn about methods for evaluating the performance of machine
          learning models, such as accuracy, precision, recall, and F1-score,
          and how to improve the performance and efficiency of your models
          through feature selection, feature extraction, and feature scaling
          techniques. <br></br>
          <br></br>The book provides practical tips and tricks for applying
          machine learning in real-world scenarios, as well as addressing
          challenges like handling large datasets and achieving scalability in
          machine learning. It also showcases real-world applications of machine
          learning across various industries, including healthcare, finance,
          e-commerce, and recommendation systems. <br></br>Studying this book
          will provide you with a solid understanding of the fundamentals of
          machine learning and practical insights that will enable you to start
          building and deploying machine learning models efficiently.
          <br></br>
          <br></br>
        </p>
        <br></br>
        <br></br>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(StudyJourney, "app__content"),
  "content",
  "app__plix"
);
