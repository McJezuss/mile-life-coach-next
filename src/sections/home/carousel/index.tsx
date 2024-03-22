import { LandingCarousel } from "./carousel";

export const LandingCarouselSection = async () => {
  // TODO: Fetch data from CMS

  return (
    <LandingCarousel
      reviews={[
        {
          age: "22",
          helpedWith: "Self-Sabotage",
          review: `Where do I even begin, I am grateful for taking the leap of faith in trusting another
        person with personal information. Milé made it very easy for me to open up about what I
        was going through. She never made me feel like I was being judged from day one and I
        could really sense her care. I could feel her passion and commitment when working with
        me which ultimately gave me motivation to really work on myself even more. Throughout
        the weeks I've worked with her I've learnt a lot on how to deal with certain situations,
        take action and most importantly to trust my decision making. I've grown more than I
        expected during my journey with Milé, and I am forever grateful for it.`,
        },
        {
          age: "23",
          helpedWith: "Personal Growth",
          review: `I would like to thank Milé for her time and guidance throughout our life coaching
        sessions. She offered ample help and support in a very uncertain time in my life. She
        really listened to my struggles and shortcomings during our sessions, and she understood
        what I needed to gain out of the process. After her coaching I was able to see extreme
        change and positive results through applying her knowledge to my everyday life. I am able
        to see a lot of personal growth and improvement after making use of her services. Thank
        you for your kind soul and all of your help Milé! :)`,
        },
        {
          age: "30",
          helpedWith: "Releasing Childhood Trauma",
          review: `Milé helped create clarity among a mess of emotions I was experiencing largely based on
        unresolved childhood trauma. She was not afraid to gently point out when I was
        misdirecting (aka lying to myself) or rather avoiding the core of my trauma. She helped me
        become empowered instead of staying in self-induced powerlessness which can be hard to
        see without an unbiased outside perspective. She helped me face uncomfortable truths
        that were too scary to face alone and then how to release it. That kind of support is life
        changing and I cannot recommend her enough!`,
        },
        {
          age: "32",
          helpedWith: "Family Trauma & Unblocking",
          review: `I had an amazing experience with Milé! She is very caring and easy to talk to. Her support
      and guidance in processing difficult times in my life were invaluable. Milé's compassion
      and expertise created a safe space for healing, growth and working through the issues. I
      can't thank her enough for the positive impact she's had on my journey towards recovery.`,
        },
        {
          age: "47",
          helpedWith: "Setting Boundaries & Leadership Coaching",
          review: `I am still using the tools that Mile gave me during our coaching sessions and it has
      honestly changed my life! I felt safe and I could discuss issues that I usually kept to
      myself. I will be forever grateful for going through this journey with her!`,
        },
        {
          age: "60",
          helpedWith: "Relationhip Issues with Daughter",
          review: `Extremely helpful with contextualising the real issues and providing a platform for self-
      reflection and guidance to solutions through excellent dialogue and practical examples in
      real life dynamics! Excellent! Thank you and highly appreciated!`,
        },
        {
          age: "26",
          helpedWith: "Navigate Romantic Relationship",
          review: `Milé helped me understand myself in relation to my relationship in a way that I didn't
      even realise I needed. I came to her with a set of questions and two months later it turns
      out I was asking the wrong questions. She helped me figure out what questions I should be
      asking myself and she's pretty much helped me get on a path that will make sure I make
      the best decisions for myself and for my life. I would highly recommend her!`,
        },
        //   {
        //     age: "25",
        //     helpedWith: "Self-Worth & Navigating Romantic Relationship",
        //     review: `I started life coaching with Milé in July as I was struggling to move on after a heartbreak.
        // It was affecting my productivity and my self-worth. For the last 4 months working with
        // her- I have been having sessions, working on daily self-observation prompts and doing
        // various exercises she prescribed. During this time Milé has been able to balance being kind

        // and supportive while also being firm and focused. She has helped me improve my self-
        // worth and to gain an understanding of what I deserve in a relationship. I even improved on
        // things I didn't even realise I wanted to work on when we first met! She has helped me
        // become less hard on myself overall and taught me to be “kind, caring and compassionate”
        // with myself. I highly recommend Milé to anyone looking to better themself. She will be
        // there for you and keep you accountable so you can grow and improve.`,
        //   },
        {
          age: "32",
          helpedWith: "Past Trauma & Emotional Regulation",
          review: `Milé's compassionate approach and invaluable insights have been nothing short of life
      changing. With her support, I've learned invaluable coping mechanisms when faced with
      past and present trauma and gained a more in depth understanding of myself. I can't
      recommend Milé highly enough for anyone facing similar challenges.`,
        },
        {
          age: "36",
          helpedWith:
            "Resolving Conflict around Gender Expresion & Sexuality & Self-Discovery",
          review: `I've been climbing this mountain for years. Milé helped me find a path I've been searching
      for so long. Walking into these sessions, I thought I had a couple separate topics to hash
      out, but it was more like four, and it turns out they were all very connected. Milé helped
      me find a way to see the bigger picture and make navigating this issue a whole lot easier.`,
        },
      ]}
    />
  );
};
