import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

import "./content.scss";

const TransferLearning = () => {
  return (
    <>
      <div className="app__hero app__flex">
        <h1 className="blog-header-text">Transfer Learning</h1>
        <img src={images.tLearning} alt="manAI" />
      </div>

      <div className="app__writeup">
        <sect>What is Transfer Learning?</sect>
        <hr></hr>

        <p>
          In the rapidly evolving field of machine learning, where data and
          computational resources are super important, transfer learning is the
          real deal. It lets us take what we already know from pre-trained
          models and use it for new tasks. This saves us a ton of time and
          computer power when building new models. how it can revolutionize the
          way we approach specific machine learning tasks.
          <br></br>
          <br></br>So, with transfer learning, we take what we already know from
          one machine learning model and apply it to a similar but different
          problem. Like if we trained a model to recognize backpacks in
          pictures, we could use that knowledge to recognize other stuff like
          shades. Basically, we're trying to use what we know from one task to
          do better in another. We take what the model figured out from "task A"
          and use it for a new "task B." The idea is to use what we learned from
          a task with lots of labeled training data to help with a task that
          doesn't have much data. Instead of starting from scratch, we use what
          we know from a related task.
          <br></br>
          <br></br>Transfer learning is mostly used for computer vision and NLP
          like sentiment analysis because they need lots of computer power.
          Transfer learning isn't really a machine learning technique, but it's
          like a way of doing things in the field, like active learning. It's
          not just for machine learning, but it's super popular for neural
          networks that need lots of data and computer power.
        </p>
        <img src={images.transferLearning} alt="manAI" />
        <label>
          <a href="https://www.mdpi.com/sensors/sensors-23-00570/article_deploy/html/images/sensors-23-00570-g001.png">
            Figure 1: Transfer Learning
          </a>
        </label>

        <sect>Approaches to Transfer Learning</sect>
        <hr></hr>
        <p>
          <b>Understanding Transfer Learning:</b> Transfer learning involves
          taking a pre-trained model, which has been trained on a large dataset,
          typically for a different task, and adapting it to a new, related
          task. The underlying idea is that the knowledge acquired by the model
          during its training on one task can be utilized to improve its
          performance on another task. Instead of starting from scratch,
          transfer learning allows us to build upon the learned features, saving
          both time and computational power.
        </p>
        <p>
          <b>Adapting Pre-trained Models:</b> The process of transferring
          knowledge from a pre-trained model involves two key steps: feature
          extraction and fine-tuning. During feature extraction, we utilize the
          pre-trained model as a fixed feature extractor, extracting relevant
          features from the input data. These features can be considered as
          high-level representations of the data. By using these extracted
          features as input, we can train a new model specifically for the
          target task, often with a smaller and more focused dataset.
        </p>
        <img src={images.featureExtraction} alt="featureExtraction" />
        <label>
          <a href="https://media.licdn.com/dms/image/D4D12AQGgBq3T1RM9Xg/article-inline_image-shrink_1000_1488/0/1666106062467?e=1693440000&v=beta&t=Rbp2iWVp4J6kKOScUgxkueZiSrmiSz2ZAThBpQ6_MjA">
            Figure 2: Simplified Illustration of Feature Extraction
          </a>
        </label>
        <p>
          <b>Fine-tuning </b>takes the process a step further by allowing us to
          update the weights of the pre-trained model's layers to better suit
          the target task. By freezing some layers and only updating the weights
          of a subset of layers, we can retain the knowledge captured by the
          pre-trained model while tailoring it to the nuances of the new task.
          This approach is particularly useful when the new task shares
          similarities with the original task the pre-trained model was trained
          on.
        </p>
        <img src={images.fineTuning} alt="fineTuning" />
        <label>
          <a href="https://www.researchgate.net/profile/Max_Ferguson/publication/322512435/figure/fig3/AS:697390994567179@1543282378794/Fig-A1-The-standard-VGG-16-network-architecture-as-proposed-in-32-Note-that-only.png">
            Figure 3: Fine Tuning Pre-Trained Models
          </a>
        </label>
        <p>
          There are several benefits to transfer learning, including requiring
          less labeled data for training and utilizing pre-trained models for
          better generalization and improved performance. It can be applied in
          various domains, but it's important to choose the pre-trained model
          carefully and ensure enough similarities with the new task. Overall,
          transfer learning is an important tool in the machine learning toolkit
          that has immense benefits. As the field continues to advance,
          exploring and utilizing transfer learning techniques will undoubtedly
          unlock new possibilities in the world of artificial intelligence and
          machine learning.
        </p>
        <br></br>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(TransferLearning, "app__content"),
  "content",
  "app__plix"
);
