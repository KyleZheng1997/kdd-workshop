
function Speakers() {
  return (
    <div style={{ paddingBottom: 100 }}>
      <div className="container" >
        <div className="row justify-content-center">
          <div className="col-lg-8 cl-md-10">
            <h2>Keynote Speakers</h2>

            <div className="speakersText">
              <p>
                <b> Title </b>:  K-priors: A General Principle of Adaptation <br />
                <b> Abstract </b>:  Humans and animals have a natural ability to quickly adapt to their surroundings, but machine-learning models, when subjected to changes, often require a complete retraining from scratch. I will present Knowledge-adaptation priors (K-priors) to reduce the cost of retraining by enabling quick and accurate adaptation for a wide-variety of tasks and models. This is made possible by a combination of weight and function-space priors to reconstruct the gradients of the past, which recovers and generalizes many existing, but seemingly-unrelated, adaptation strategies. Overall, my hope is to convince the audience that K-priors provide an intuitive yet practical mechanism for generic adaptation in machine learning. <br />
                <b> Speaker Profile </b> <a href="https://emtiyaz.github.io/"> <b>Emtiyaz Khan</b> </a> (also known as Emti) is a team leader at the RIKEN center for Advanced Intelligence Project (AIP) in Tokyo where he leads the Approximate Bayesian Inference Team. He is also a visiting professor at the Tokyo University of Agriculture and Technology (TUAT). Previously, he was a postdoc and then a scientist at Ecole Polytechnique Fédérale de Lausanne (EPFL), where he also taught two large machine learning courses and received a teaching award. He finished his PhD in machine learning from University of British Columbia in 2012. The main goal of Emti’s research is to understand the principles of learning from data and use them to develop algorithms that can learn like living beings. For the past 10 years, his work has focused on developing Bayesian methods that could lead to such fundamental principles. The approximate Bayesian inference team now continues to use these principles, as well as derive new ones, to solve real-world problems.
              </p>
            </div>

            {/* <hr /> */}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Speakers;
