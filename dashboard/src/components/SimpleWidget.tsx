import Link from "next/link";

interface Props {
  title: string;
  subtitile?: string;
  label?: string;
  icon?: React.ReactNode;
  href?: string;
}

export const SimpleWidget = ({
  title,
  subtitile,
  label,
  icon,
  href,
}: Props) => {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 p-4 sm:min-w-62.5 min-w-full rounded-2xl border border-gray-100 mx-2 my-2 flex flex-col justify-between">
      <div>
        {/* Label superior con estilo sutil */}
        {label && (
          <div className="mb-2">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              {label}
            </h2>
          </div>
        )}

        <div className="flex items-center space-x-4 py-2">
          {/* Contenedor de ícono con fondo suave */}
          {icon && (
            <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
              {icon}
            </div>
          )}

          <div className="flex flex-col">
            <h4 className="text-2xl font-bold text-gray-800 leading-tight">
              {title}
            </h4>
            {subtitile && (
              <p className="text-sm text-gray-500 font-medium">{subtitile}</p>
            )}
          </div>
        </div>
      </div>

      {/* Footer con Link */}
      {href && (
        <div className="border-t border-gray-100 mt-4 pt-3 text-right">
          <Link
            href={href}
            className="text-indigo-600 text-sm font-bold hover:text-indigo-800 transition-colors"
          >
            Ver más →
          </Link>
        </div>
      )}
    </div>
  );
};
