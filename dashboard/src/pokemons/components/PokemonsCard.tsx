import Link from "next/link";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
  pokemon: SimplePokemon;
}

const PokemonsCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  return (
    <>
      <div className="mx-auto right-0 mt-2 w-60">
        <div className="bg-white rounded overflow-hidden shadow-lg">
          <div className="text-center p-6 bg-gray-800 border-b ">
            <div className="flex justify-center items-center">
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                width={100}
                height={100}
                alt={name}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                property="false"
              />
            </div>

            <p className="pt-2 text-lg font-semibold text-gray-50"></p>
            <div className="mt-5">
              <Link
                href={`/dashboard/pokemon-name/${name}`}
                className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
              >
                Saber mas
              </Link>
            </div>
          </div>
          <div className="border-b">
            <Link
              href="/dashboard/main"
              className="px-4 py-2 hover:bg-gray-100 flex"
            >
              <div className="text-red-600 items-center flex">
                <IoHeartOutline size={20} />
              </div>
              <div className="pl-3">
                <p className="text-sm font-medium text-gray-800 leading-none">
                  Favorite
                </p>
                <p className="text-xs text-gray-500">Select your favorite</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonsCard;
