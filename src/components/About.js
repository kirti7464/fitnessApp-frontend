import React from 'react'

function About() {
  return (
    <div className="container justify-content-center" style={{marginTop:"100px",backgroundColor:"#f0f0fa",borderRadius:"20px"}}>
        <h1 style={{textAlign:"center"}}>ABOUT US <img src='http://marilialopesnutri.com.br/wp-content/uploads/2022/02/Icone-LP-MLN-Plano-Nutricional.png.webp' alt="img" height={"45px"}/></h1>
        <div className='text-center'>
            <em><strong>Welcome to FITNESS RECIPE - Your Ultimate Destination for Fitness and Wellness!</strong></em>
            <p className='text-center my-2'>Our mission is to empower you on your journey to a healthier and happier lifestyle by providing a comprehensive platform that combines fitness, wellness, and delicious healthy recipes. Our website is designed to guide you through your fitness goals while making nutritious eating an enjoyable and integral part of your routine.</p>
        </div>
        <div className='row my-5'>
            <h2 style={{textAlign:"center"}}>Contact Us</h2>
            <p className='text-center my-2'>We value your input and look forward to hearing from you! If you have any suggestions, questions, or feedback, please don't hesitate to reach out to us. You can connect with us via email at<em> feedback@fitnessRecipe.com</em> . Your thoughts are essential in helping us enhance your experience on our Fitness and Wellness platform. Thank you for being a part of our community!</p>
        </div>
    </div>
  )
}

export default About