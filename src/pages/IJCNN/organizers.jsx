function Organizers() {
  return (
    <div style={{paddingBottom: 100}}>
      <div className="container" >
        <div className="row justify-content-center">
          <div className="col-lg-8 cl-md-10">
            <h2>Organizers</h2>
            
            <div>
              <p className="organizersText">
                <a href="https://shanyou92.github.io/"> <b>Shan You</b> </a> is currently a Researcher at SenseTime, and also a post doc at Tsinghua University. Before that, he received a Bachelor of mathematics and applied mathematics (elite class) from Xi'an Jiaotong University, and a Ph.D. degree of computer science from Peking University. During pursing his PhD degree, he visited the UBTech Sydney AI Institute, the University of Sydney, and received awards from Qualcomm. His research interests include AutoML, reinforcement learning and other computer vision and machine learning topics, such as face recognition and object tracking. He has published his research outcomes in many top tier conferences and transactions.
              </p>
            </div>

            <div>
            {/* <div className="organizersImage" style={{ backgroundImage:`url("http://changxu.xyz/chang.jpg")` }} /> */}
            <p className="organizersText">
              <a href="http://changxu.xyz/"> <b> Chang Xu </b> </a>  is a Senior Lecturer and ARC DECRA Fellow at the School of Computer Science, University of Sydney. His recent interests focus on efficient deep learning and sparse networks, robust learning under noisy data or labels, and neural architecture search. He has published over 100 papers in prestigious journals and top tier conferences. He has received several paper awards, including Distinguished Paper Award in IJCAI 2018. He regularly severed as the senior PC or PC for many conferences, e.g., ICLR, SIGKDD, NIPS, ICML, CVPR, ICCV, IJCAI and AAAI. He has been recognized as Top Ten Distinguished Senior PC Member in IJCAI 2017.
            </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Organizers;
