import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

import "./content.scss";

const KNearestNeighbors = () => {
  return (
    <>
      <div className="app__hero app__flex">
        <h1 className="blog-header-text">K-Nearest Neighbors</h1>
        <img src={images.knn_fig6} alt="manAI" />
      </div>

      <div className="app__writeup">
        <sect>Introduction</sect>
        <hr></hr>

        <p>
          The K-nearest neighbors (KNN) algorithm is an uncomplicated yet potent
          machine learning approach that can be utilized for both categorization
          and regression duties. It functions by identifying the k most akin
          examples in the training dataset to a novel instance and then
          forecasting the label of the new instance based on the labels of the k
          closest neighbors.
          <br></br>
          <br></br>The KNN algorithm can be broken down into four fundamental
          steps: choosing the number of neighbors, calculating the distance
          between the new instance and all the instances in the training
          dataset, finding the k instances with the smallest distances to the
          new instance, and predicting the label of the new instance based on
          the labels of the k nearest neighbors. The technique used to calculate
          the distance metric between two instances can be any distance metric,
          such as the Euclidean distance, the Manhattan distance, or the
          Minkowski distance.
          <br></br>
          <br></br>
          <p>
            One of the biggest advantages of KNN is its simplicity and ease of
            understanding. Additionally, KNN is a non-parametric algorithm that
            does not make any assumptions about the distribution of the data.
            This makes it a versatile algorithm that can be applied to a wide
            range of problems.
            <br></br>
            However, KNN can also have some drawbacks. It can be computationally
            expensive, especially for larger datasets. The choice of distance
            metric and number of neighbors can also affect its performance.
          </p>
          <br></br>
          <sect>Applications of KNN</sect>
          <hr></hr>
          <br></br>
          <ul>
            <li>
              <b>Classification:</b> KNN can be used to classify new instances
              into known categories. For example, KNN can be used to classify
              images of flowers into different species.
            </li>
            <li>
              <b>Regression:</b> KNN can be used to predict a continuous value
              for a new instance. For example, KNN can be used to predict the
              price of a house based on its features.
            </li>
            <li>
              <b>Recommendation Systems:</b> KNN can be used to recommend new
              items to users based on their past behavior. For example, KNN can
              be used to recommend movies to users based on the movies they have
              already rated.
            </li>
          </ul>
          <br></br>
          <sect>Measures of Distance</sect>
          <hr></hr>
          <br></br>K-nearest neighbors is a powerful algorithm that relies on
          the concept of locality in data. Essentially, the algorithm assumes
          that points that are located close to each other are likely to have
          similar characteristics and values. This assumption allows the
          algorithm to predict new data points by looking for similar
          observations in the training data and making an educated guess based
          on the results. To formulate a prediction using the k-nearest
          observations, the algorithm uses a variety of techniques depending on
          the type of data being analyzed.
          <br></br>
          <br></br>
          For regression analyses, the algorithm creates a prediction that is
          based on some measure of the average value of the surrounding
          neighbors. This is typically represented as the mean value of all the
          closest observations. This type of prediction is ideal for continuous
          variables like temperature, height, or weight where there is a clear
          range of possible values.
          <br></br>
          <br></br>
          For classification problems, the algorithm uses a voting mechanism to
          create a prediction based on the surrounding neighbors. Essentially,
          the algorithm calculates the most common characteristic or feature of
          the surrounding observations and assigns that value to the new data
          point. For example, if the algorithm is analyzing data on different
          types of fruit, it may use the surrounding observations to predict
          whether a new observation is an apple, banana, or orange.
        </p>
        <img src={images.knn_fig1} alt="KNN3" />
        <label>
          <a href="https://miro.medium.com/v2/resize:fit:591/1*kCqervQNQ5fGDfkFwrMzRQ.png">
            Figure 1: Classifying a data point based on K-nearset neighbors
            where k=3
          </a>
        </label>

        <sect>Determining K</sect>
        <hr></hr>
        <p>
          When searching for the observations closest to a query, the first
          thing to do is to choose a metric. After this, you need to determine
          the number of nearest neighbors that should be taken into account. By
          default,<code>sklearn neighbors.KNeighborsRegressor</code> and
          <code>sklearn neighbors.KNeighborsClassifier</code>employ a value of 5
          for n_neighbors, also known as k. However, this can be optimized for
          the best choice by using something like K-fold cross-validation, which
          allows you to experiment with different k values. It has been observed
          that the root of n, where n is the number of training set samples,
          typically performs well.
        </p>
        <p>
          Suppose we set <i>k=n</i>. This means that the entire dataset will be
          employed to predict the value of our query point. If we use a simple
          average, the resulting predictor will give a constant value,
          regardless of the input features. For classification, new data points
          will always be classified as the most prevalent class in the training
          dataset. For regression, the mean value of the entire training dataset
          is always returned. However, if we use a weighted average for
          prediction, where data points closer to the query have higher weights,
          what will the results look like? Let's explore this idea in a Jupyter
          notebook.
        </p>
        <img src={images.knn_fig2} alt="featureExtraction" />
        <label>
          <a href=" ">Figure 2: Importing the required modules</a>
        </label>

        <img src={images.knn_fig3} alt="featureExtraction" />
        <label>
          <a href=" ">
            Figure 3: Converting the training and testing features and labels
            into pandas DataFrames
          </a>
        </label>

        <img src={images.knn_fig4} alt="featureExtraction" />
        <label>
          <a href=" ">
            Figure 4: Defining a list of parameter configurations for the
            K-nearest neighbors model
          </a>
        </label>

        <img src={images.knn_fig5} alt="featureExtraction" />
        <label>
          <a href=" ">
            Figure 5: Creating subplots and plotting the training data and
            predicted lines for each parameter configuration
          </a>
        </label>

        <img src={images.knn_fig6} alt="featureExtraction" />
        <label>
          <a href=" ">Figure 6: Result</a>
        </label>
        <p>
          One interesting observation is that the optimal value of k depends on
          the dataset and the problem being solved. In some cases, a small value
          of k may be the best choice, while in others, a larger value may be
          more suitable.
          <br></br>
          <br></br>
          In conclusion, the choice of k has a significant impact on the quality
          of the predictions. It is important to experiment with different
          values of k and choose the one that gives the best results.
          Additionally, the optimal value of k depends on the dataset and the
          problem being solved. By using techniques such as K-fold
          cross-validation and plotting the prediction error as a function of k,
          we can choose an optimal value for k and improve the performance of
          our model.
        </p>

        <br></br>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(KNearestNeighbors, "app__content"),
  "content",
  "app__plix"
);
