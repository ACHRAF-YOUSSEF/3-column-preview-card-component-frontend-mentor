interface CardProps {
  rounded_left: boolean;
  rounded_right: boolean;
  color:
    | "blue-b1"
    | "Bright-orange"
    | "Dark-cyan"
    | "Very-dark-cyan"
    | "Transparent-white"
    | "Very-light-gray";
  image: string;
  title: string;
  description: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({
  rounded_left,
  rounded_right,
  color,
  image,
  title,
  description,
  onClick,
}) => {
  return (
    <div
      className={`
        ${
          rounded_left
            ? "sm:rounded-t-none sm:rounded-tl-xl sm:rounded-bl-xl rounded-t-xl"
            : rounded_right
            ? "sm:rounded-r-xl sm:rounded-bl-none rounded-b-xl"
            : "rounded-none"
        }
        flex 
        flex-col 
        justify-center 
        items-start 
        sm:mb-4
        p-8
        sm:pb-12
        space-y-8
        bg-${color}
        w-fit
        h-fit
      `}
    >
      <img src={image} alt="icon" />
      <h1
        className="
          text-Very-light-gray 
          text-4xl 
          uppercase
        "
      >
        {title}
      </h1>
      <p
        className="
          text-Transparent-white
          text-sm 
          py-4
        "
      >
        {description}
      </p>
      <button
        onClick={onClick}
        className={`
          rounded-full 
          py-2 
          px-8 
          bg-Very-light-gray
          hover:bg-${color}
          border-solid
          border-2
          hover:text-Transparent-white
          text-${color}
        `}
      >
        Learn More
      </button>
      <div className="hidden text-Bright-orange bg-Bright-orange hover:bg-Bright-orange"></div>
      <div className="hidden text-Dark-cyan bg-Dark-cyan hover:bg-Dark-cyan"></div>
      <div className="hidden text-Very-dark-cyan bg-Very-dark-cyan hover:bg-Very-dark-cyan"></div>
      <div className="hidden text-Transparent-white bg-Transparent-white hover:bg-Transparent-white"></div>
      <div className="hidden text-Very-light-gray bg-Very-light-gray hover:bg-Very-light-gray"></div>
    </div>
  );
};

export default Card;