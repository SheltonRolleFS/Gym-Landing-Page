# What is this project?
This project is a landing page for a fake gym called RonniesGym. It was a simple project that I created to practice designing landing pages and recreating those designs using ReactJS. This project took me about a days worth of work from start to finish. This included designing the landing page in figma and recreating the design in React. For styling, I added my own custom styling using SASS.

## Intersection Observer Feature
Along with styling, I utilized Intersection Observer to add some fade in animations upon the page load for the welcome section. This was a new feature I was interested in learning so I decided to get a small bit of practice in this project before attempting it in any bigger projects. I think it turned out really nice but I'm sure with time and practice I can implement this feature more effeciently. For now, I have the javascript code for the intersection observer listed below. Using the useRef React Hook, I created variables that act as references to the elements I want to observe, then using those variables, I passed them into the observer and added the animation based on the elements id which I retrieved using the id in the target object that is inside of each entry passed into the observer.

## Observer Code
```javascript
  const poseRef = useRef(null);
  const circleRef = useRef(null);
  const welcomeTextRef = useRef(null);

  const observer = new IntersectionObserver((entries) => {
    console.log(entries);
    entries.forEach((entry) => {
      switch (entry.target.id) {
        case "pose":
          entry.target.classList.toggle("animate-pose", entry.isIntersecting);
          break;
        case "circle":
          entry.target.classList.toggle("animate-circle", entry.isIntersecting);
          break;
        case "welcome-text":
          entry.target.classList.toggle(
            "animate-welcome",
            entry.isIntersecting
          );
          break;
        default:
          return;
      }

      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  });

  useEffect(() => {
    observer.observe(poseRef.current);
    observer.observe(circleRef.current);
    observer.observe(welcomeTextRef.current);
  }, []);
```
