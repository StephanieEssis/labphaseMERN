// Simule les mêmes données en mémoire (ou tu peux les partager via un module si tu veux persister dans la session)
let rooms = [
  { id: '1', name: 'Chambre Deluxe' },
  { id: '2', name: ' Suite prestigieuse'},
   { id: '3', name: 'Chambre Standard' },
];

// GET /api/rooms/:id — récupère une chambre par id
export async function GET(request, { params }) {
  const { id } = params;

  const room = rooms.find((r) => r.id === id);

  if (!room) {
    return new Response(JSON.stringify({ message: 'Room not found' }), { status: 404 });
  }

  return new Response(JSON.stringify(room), { status: 200 });
}

// PUT /api/rooms/:id — modifie une chambre
export async function PUT(request, { params }) {
  const { id } = params;
  const data = await request.json();

  const roomIndex = rooms.findIndex((r) => r.id === id);

  if (roomIndex === -1) {
    return new Response(JSON.stringify({ message: 'Room not found' }), { status: 404 });
  }

  rooms[roomIndex] = { ...rooms[roomIndex], ...data };

  return new Response(JSON.stringify(rooms[roomIndex]), { status: 200 });
}

// DELETE /api/rooms/:id — supprime une chambre
export async function DELETE(request, { params }) {
  const { id } = params;

  const roomIndex = rooms.findIndex((r) => r.id === id);

  if (roomIndex === -1) {
    return new Response(JSON.stringify({ message: 'Room not found' }), { status: 404 });
  }

  const deletedRoom = rooms.splice(roomIndex, 1);

  return new Response(JSON.stringify({ message: 'Room deleted', room: deletedRoom[0] }), { status: 200 });
}
