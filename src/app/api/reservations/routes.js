// src/app/api/reservations/route.js
export async function POST(request) {
  const body = await request.json();
  // logique d'ajout de réservation
  return new Response(JSON.stringify({ message: "Reservation created" }), {
    status: 201,
  });
// }
// export async function POST(request) {
//   const data = await request.json();
//   console.log("Reservation received: ", data);
//   return new Response(JSON.stringify({ message: "Reservation created" }), {
//     status: 201,
//   });
 }
