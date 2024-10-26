import { Card } from "@mantine/core";

interface Props {
  imageURL: string;
}

const DetailHeroCard: React.FC<Props> = ({ imageURL }) => {
  return (
    <Card
      radius="lg"
      className="relative h-[75vh] w-[30vw] shadow-2xl"
      style={{
        backgroundImage: `url(${imageURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 top-1/4"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .15) 90%)",
        }}
      />
    </Card>
  );
};

export default DetailHeroCard;
