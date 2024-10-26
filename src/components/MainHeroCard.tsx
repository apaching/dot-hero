import { Card, Text } from "@mantine/core";

interface Props {
  heroName: string;
  realName: string;
  imageURL: string;
}

const HeroCard: React.FC<Props> = ({ heroName, realName, imageURL }) => {
  return (
    <>
      <Card
        radius="md"
        className="relative h-72 w-56 shadow-2xl transition-transform duration-200 ease-in-out hover:scale-105"
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
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.85) 90%)",
          }}
        />
        <div>
          <Text className="absolute bottom-8 left-0 right-0 text-center text-base font-black uppercase tracking-tighter text-white drop-shadow-lg">
            {heroName}
          </Text>
          <Text className="absolute bottom-5 left-0 right-0 text-center text-xs font-normal tracking-tighter text-gray-300 drop-shadow-lg">
            {realName}
          </Text>
        </div>
      </Card>
    </>
  );
};

export default HeroCard;
