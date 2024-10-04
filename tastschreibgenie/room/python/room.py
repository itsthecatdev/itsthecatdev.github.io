import random
servers = ['Main-00','Main-01','Main-02','Main-03','Main-04']
id = random.randint(0,4)
roomid = random.randint(1000,9999)

inviteCode = f"https://thatcutekitten03.github.io/tastschreibgenie/connect/room?id={roomid}"

print("TastschreibGenie [PyScript 4.2]")
print("Searching Room Host...")
print("Connected to Server \'",servers[id],"\'")
print("Creating new [Private] Room...")
print(f"Connected to Room \'TGroom:{roomid}\'")
print(inviteCode)
print(f"\n\nNo Host is on this room. Are you wanting to host this room?\nhttps://thatcutekitten03.github.io/tastschreibgenie/host/room?id={roomid}\n\nwaiting on host to connect...")

input00 = input("\n$tastschreibGenie:pyscript > ")
