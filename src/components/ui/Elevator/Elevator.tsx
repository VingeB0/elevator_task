type ElevatorProps = {
  text: string | number;
  time: number;
};

const ANIMATION_TIME = 0.3;

export const Elevator = ({
  text,
  moveTo,
  time,
  ...props
}: ElevatorProps & { moveTo: number }) => {
  console.log("time * ANIMATION_TIME 2", time * ANIMATION_TIME);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50px",
        height: "50px",
        transform: `translateY(-${(moveTo - 1) * 50}px)`,
        transition: `transform ${time * ANIMATION_TIME}s linear`,
      }}
      {...props}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "40px",
          height: "40px",
          fontSize: "20px",
          fontWeight: "bold",
          color: "#242424",
          background: "#fff",
        }}
      >
        {moveTo}
      </div>
    </div>
  );
};
