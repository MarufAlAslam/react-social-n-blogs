import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const data = [
        {
            id: 1, 
            title: "Mindfulness exercises",
            description: "An effective tool for managing symptoms of anxiety and depression. By incorporating guided meditations, breathing exercises, and visualization techniques into the app, students can learn to calm their minds and reduce their stress levels. Guided meditations can help students focus their attention on the present moment, while breathing exercises can help them regulate their breathing and calm their nervous system. Visualization techniques can help students create a mental image of a peaceful place, which can be a helpful tool for reducing anxiety."
        },
        {
            id: 2,
            title: "Daily journaling prompts",
            description: "This can also be a helpful feature in an anxiety and depression web app. By providing students with prompts to reflect on their thoughts and feelings, they can learn to identify patterns in their emotions and develop a greater sense of self-awareness. Journaling can also be a helpful tool for processing difficult emotions and finding clarity in difficult situations."
        },
        {
            id: 3,
            title: "Coping strategies",
            description: "When students are feeling overwhelmed, they can turn to the app for a list of coping strategies that can help them manage their emotions. These could include physical activities like going for a walk or practicing yoga, or social activities like talking to a friend or engaging in a hobby."
        },
        {
            id: 4,
            title: "Educational content",
            description: "About anxiety and depression that can help students better understand what they're experiencing and reduce the stigma around mental health. The content could cover topics such as the causes and symptoms of anxiety and depression, common treatments, and strategies for managing symptoms. This content could be in the form of articles, videos, or podcasts, and can provide students with the information they need to better understand their own mental health."
        }
    ]
  return (
    <div className="md:p-10 p-4 md:h-screen overflow-y-scroll md:w-2/3 mx-auto">
      <div className="bg-[#A18080] md:p-10 p-3 rounded-[15px] mb-10">
        <p className="md:text-lg text-white md:text-justify mb-8">
          Welcome to our web app designed to help students manage their anxiety
          and depression. We understand that these conditions can have a
          significant impact on your everyday life, and we're here to provide
          you with the tools and resources you need to take control of your
          mental health.
        </p>
        <p className=",d:text-lg text-white md:text-justify mb-8">
          Our app is designed with you in mind, and we've included features such
          as mindfulness exercises, daily journaling prompts, coping strategies,
          and educational content to help you better understand your emotions
          and manage your symptoms. We've also included resources for finding
          professional help if you need it.
        </p>
        <p className="md:text-lg text-white md:text-justify mb-8">
          We hope that our app can be a valuable tool in your mental health
          journey, and we're committed to providing you with the support and
          resources you need to thrive. Remember, taking care of your mental
          health is just as important as taking care of your physical health,
          and we're here to help you every step of the way.
        </p>
      </div>

      <p className="md:text-lg text-white md:text-justify bg-[#A18080] md:p-10 p-3 rounded-[15px] mb-10">
        Here are some of the key features and content of our web app that we
        believe can be incredibly helpful in managing anxiety and depression on
        a day-to-day basis:
      </p>
      <div className="flex flex-wrap justify-start md:gap-14 items-center">
        {
            data.map((item) => (
                <Link key={item.id} to={`/dashboard/${item.id}`} state={{item: item}} className="bg-[#A18080] p-5 mb-8 rounded-[15px]">
                    {item.title}
                </Link>
            ))
        }
      </div>
    </div>
  );
};

export default Dashboard;
