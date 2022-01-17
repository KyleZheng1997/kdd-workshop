function Home() {
  return (
    <div>
      <div className="container" >
        <div className="row justify-content-center">
          <div className="col-lg-8 cl-md-10">
          <h2>Introduction</h2>
          <p className="contentText">
              Recent years have witnessed the prosperity of deep learning in a variety of applications, such as computer vision, natural language processing and speech recognition and enhancement. And this success stimulates the proliferation of many benchmark deep neural models. Before practitioners develop models for the task of interest, they can actually have access to some off-the-shelf models, which are already trained on the same, similar or even totally different tasks. Those pretrained models are usually dedicated to mine the training data well, and the informative knowledge is supposed to exist in the learned representations or the model weights themselves. In this sense, how to mine the knowledge in the pretrained models is also of significance in achieving more promising performance.
          </p>

          <p className="contentText">
            There are multiple ways to fulfill the model mining. For example, inspired by the human education, we can leverage the pretrained models as privileged information or additional resources following the teacher-student paradigm. Then the knowledge can be manifested and distilled on the learned logits or intermediate features, such as attention maps, similarity among examples, and local graphs. As a result, the student models are expected to perform better with the help of the mined knowledge in teacher models. Likewise, pretrained models can also serve as a general yet powerful platform for adapting customized models for different target tasks. For example, large-scale pretrained models with huge parameters as BERT, GPT-3, and ViT show great generalization ability in many downstream tasks, and we can have decent performance for the target task with only limited data.
          </p>

          <div style={{ height: 20 }}/>

          <h2>Topics of Interest</h2>
          <p className="contentText">
              The TOPIC model mining of this session aims to investigate more diverse and advanced manners in mining knowledge within models, which tends to leverage the pretrained models more wisely, elegantly and systematically. The topics of interest include the theory, algorithm and application of mining the values of models in different scenarios
          </p >

          <div>
            <ul className="contentText">
              <li>Distilling a lightweight model from a well-trained heavy model, e.g., knowledge distillation or the teacher-student paradigm;</li>
              <li>Continuously upgrading the model with new data, new concept or new tasks, e.g., continual learning, lifelong learning, zero-shot learning and multi-task learning.</li>
              <li>Boosting the performance of the model by carefully designing the predecessor tasks, e.g., pre-training, self-supervised and contrastive learning.</li>
              <li>Transferring the models across different datasets, domains or modalities, e.g., transfer learning and domain adaptation.</li>
            </ul>
          </div>

            <p className="contentText">
              Model mining as a special way of data mining is relevant to IJCNN, and its audience including researchers and engineers will benefit a lot for designing more advanced algorithms for their tasks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
