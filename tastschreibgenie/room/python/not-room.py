import random
servers = ['Main-00','Main-01','Main-02','Main-03','Main-04']
id = random.randint(0,4)
roomid = random.randint(1000,9999)

inviteCode = f"https://thatcutekitten03.github.io/tastschreibgenie/connect/room?id={roomid}"

print("TastschreibGenie [PyScript 4.2]")
print("Searching Room Host...")
print("Connected to Server \'",servers[id],"\'")
print("Searching for Rooms on this server [0]")
print("Room not Found 404")
input00 = input("\n$tastschreibGenie:pyscript > ")
