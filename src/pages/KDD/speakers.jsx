
function Speakers() {
  return (
    <div style={{ paddingBottom: 100 }}>
      <div className="container" >
        <div className="row justify-content-center">
          <div className="col-lg-8 cl-md-10">
            <h2>Keynote Speakers</h2>

            <div className="speakersText">
                <b> Title </b>:  K-priors: A General Principle of Adaptation <br />
                <b> Abstract </b>:  Humans and animals have a natural ability to quickly adapt to their surroundings, but machine-learning models, when subjected to changes, often require a complete retraining from scratch. I will present Knowledge-adaptation priors (K-priors) to reduce the cost of retraining by enabling quick and accurate adaptation for a wide-variety of tasks and models. This is made possible by a combination of weight and function-space priors to reconstruct the gradients of the past, which recovers and generalizes many existing, but seemingly-unrelated, adaptation strategies. Overall, my hope is to convince the audience that K-priors provide an intuitive yet practical mechanism for generic adaptation in machine learning. <br />
                <b> Speaker Profile </b>: <a href="https://emtiyaz.github.io/"> <b>Emtiyaz Khan</b> </a> (also known as Emti) is a team leader at the RIKEN center for Advanced Intelligence Project (AIP) in Tokyo where he leads the Approximate Bayesian Inference Team. He is also a visiting professor at the Tokyo University of Agriculture and Technology (TUAT). Previously, he was a postdoc and then a scientist at Ecole Polytechnique Fédérale de Lausanne (EPFL), where he also taught two large machine learning courses and received a teaching award. He finished his PhD in machine learning from University of British Columbia in 2012. The main goal of Emti’s research is to understand the principles of learning from data and use them to develop algorithms that can learn like living beings. For the past 10 years, his work has focused on developing Bayesian methods that could lead to such fundamental principles. The approximate Bayesian inference team now continues to use these principles, as well as derive new ones, to solve real-world problems.
            </div>

            <br />

            <div className="speakersText">
              <b> Title </b>:  Towards Better Utilization of Pre-trained Models <br />
              <b> Abstract </b>:  Pre-training, which first pretrains a large model on a large amount of unlabeled data and then fine-tunes the pre-trained model on downstream tasks, has become a domain paradigm in multiple AI fields, especially natural language  processing (NLP). In this talk, I will focus on better utilization of pre-trained models and ask two fundamental questions:
              <ol style={{ marginBottom: "0px" }}>
                <li> Is fine-tuning universally applicable to all downstream tasks? </li>
                <li> How to efficiently utilize pretrained models considering diverse requirements of model size and latency in different downstream tasks? </li>
              </ol>
                For the first question, I will show that direct fine-tuning does not work very well for an important NLP task: machine translation, and propose to fuse the pre-trained model with standard encoder-decoder framework, which can better leverage pre-trained models. <br />
                For the second question, I will introduce our recent work, BERT-NAS, which leverages neural architecture search (NAS) to find lightweight models that achieve better accuracy than previous approaches and can be directly applied to different downstream tasks with adaptive model sizes for different requirements of memory or latency. 
              <br />
              <b> Speaker Profile </b>: <a href="https://www.microsoft.com/en-us/research/people/taoqin/"> <b>Dr. Tao Qin</b> </a> is a Senior Principal Researcher and managing the Deep and Reinforcement Learning group at Microsoft Research Asia. His research interests include deep learning (with applications to machine translation, healthcare, speech synthesis and recognition, music understanding and composition), reinforcement learning (with applications to games and real-world problems), game theory and multi-agent systems (with applications to cloud computing, online and mobile advertising), and information retrieval and computational advertising. His team helped Microsoft achieve human parity in Chinese-English machine translation in 2018, won the first place for 8 translation tasks in WMT 2019, and built the world-best Mahjong AI, named Suphx, which achieved 10 DAN on the Tenhou platform in 2019.
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Speakers;
