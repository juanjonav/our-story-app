
import React from "react";
const avatarurl = "https://unavatar.io/"

// Datos de ejemplo para los posts
const posts = [
  {
    id: 1,
    user: {
      name: "JuanjoNavx",
      handle: "JuanjoNavx",
    },
    content_title: "la mas bella",
    content: "Soy tan superficial que lo primero que destacaré es lo increíblemente bella que eres. Desde que te vi aunque no me atrevi a hablarte me pareciste una mujer con una belleza insuperable. si empiezo con tu cabello sea corto, largo, natural y ahora pintado xd parece velo que enmarca tu rostro con gran elegancia, tus ojos, más bellos que cualquier gema y con esa mirada matadora, tu naricita, parece de una escultura perfecta., tus labios, tienen una forma hipnotizante que me manda a otro lado y la forma en general de tu rostro es bellísima. Acompañado de tu carisma increíble con una gran presencia que deja opaco al sol, tu sonrisa es tan increíble que puede hacer bueno un día horrible",
    content_img:"https://res.cloudinary.com/dzmb09evr/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1726552057/m1_dfrkzs.jpg",
    timestamp: "",
  },
  {
    id: 2,
    user: {
      name: "JuanjoNavx",
      handle: "JuanjoNavx",
    },
    content_title: "diva",
    content: "Y esa cara perfecta tenia que venir con una figura envidiable 😍 . En todas las fiestas, eres la que más resalta. Simplemente, es imposible no pararse a ver a una mujer tan bella, y el alma de las fiestas. agradezco mucho haber podido salir contigo aquel día :’)",
    content_img:"https://res.cloudinary.com/dzmb09evr/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1726552056/m5salida_fx1fgj.jpg",
    timestamp: "",
  },
  {
    id: 3,
    user: {
      name: "JuanjoNavx",
      handle: "@JuanjoNavx",
    },
    content_title: "hooolaaaa enfermeraaa 😍",
    content: "Desde que te conocí, me pareciste la persona mas increíblemente lista de este mundo, tanto intelectual como en la elocuencia y la calidad de tus palabras, estas en una carrera tan competitiva demostrando tu gran capacidad y esfuerzo. Sigue esforzándote mi reina preciosa y demuestra que puedes superar cualquier obstáculo y a cualquier persona, tu inteligencia es otra de las muchas razones por las que te admiro. Además no me molestaría enfermarme o herirme si eso me permite estar a tu lado o verte más seguido :v <33333",
    content_img:"https://res.cloudinary.com/dzmb09evr/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1726552056/m3uniforme_m1ayua.jpg",
    timestamp: "",
  },
  {
    id: 4,
    user: {
      name: "JuanjoNavx",
      handle: "juanjonavx",
    },
    content_title: "chambeadora yo iría a comprar para ver a esa mujer",
    content: "Quién se imaginaría que alguien ocupada en sus estudios tambien trabaja y podría mantenerse tan increíblemente bella?. ¿Cuál es tu secretooooo?, tambien me encantaría conocer a esta mujer por otro lado, el cansancio mental es algo que no se ve a simple vista y me encantaría poder estar allí para ti, ayudándote con lo que necesites.",
    content_img:"https://res.cloudinary.com/dzmb09evr/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1726552056/m4trabajo_dawkq7.jpg",
    timestamp: "",
  },
  {
    id: 5,
    user: {
      name: "JuanjoNavx",
      handle: "JuanjoNavx",
    },
    content_title: "mommy",
    content: "Y finalmente, terminando con tus etapas (aun no termina ni empiezan las cosas que me encantan de ti), está esta mujer que no he podido conocer, pero sé que es una madre increíble. Porque tu siendo tan bondadosa se que criarás a una mujer tan generosa como tú. Y me encantaría acompañarte en esa etapa y ser parte de nuestro futuro juntosmenos mal queda cerca a lo mejor te encuentro de casualidad alguna vez xd",
    content_img:"https://res.cloudinary.com/dzmb09evr/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1726552057/m2_klqwdb.jpg",
    timestamp: "",
  },
];

export default function Post() {
  

  return (
    <div className="text-gray-100">
      
      <main className="container mx-auto px-4 py-8 ">
        <div className="max-w-xl mx-auto space-y-10 rounded ">
          {posts.map((post) => (
            <div key={post.id} className="bg-zinc-800 hover:bg-gray-750 transition-colors border-gray-700 ">
              <div className="flex flex-row items-center space-x-4 pb-2">
                
                <img src={`${avatarurl}${post.user.handle}`} alt="" className="w-16 h-16 rounded-full" />
                <div>
                  <p className="font-semibold">{post.user.name}</p>
                  <p className="text-sm text-slate-50">@{post.user.handle}</p>
                </div>
                <p className="ml-auto text-sm text-gray-400">{post.timestamp}</p>
              </div>
              <div className="post-content">
                <h2 className="text-xl font-bold">{post.content_title}</h2>
                <p className="text-gray-300">{post.content}</p>
                <img src={post.content_img} alt="" className="w-1200 h-1200" />
              </div>
            </div>
          ))}
        </div>
      </main>
      
    </div>
  );
};

