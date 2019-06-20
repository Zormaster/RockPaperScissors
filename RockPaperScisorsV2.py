from getpass import getpass
done = False
validAnswer = {"r", "p", "s"}
rr = '''
p1                             p2
    _______           _______
---'   ____)         (____   '---
      (_____)       (_____)
      (_____)       (_____)
      (____)         (____)
---.__(___)           (___)__.---
'''
pp = '''
p1                                     p2
    _______                   _______
---'   ____)____         ____(____   '---
          ______)       (_______
          _______)     (________
         _______)       (________
---.__________)           (__________.---
'''
ss = '''
p1                                      p2
    _______                    _______
---'   ____)____          ____(____   '---
          ______)        (_______
       __________)      (__________
      (____)                  (____)
---.__(___)                    (___)__.---
'''
rp = '''
p1                                 p2
    _______               _______
---'   ____)         ____(____   '---
      (_____)       (_______
      (_____)      (________
      (____)        (________
---.__(___)           (__________.---
'''
rs = '''
p1                                 p2
    _______               _______
---'   ____)         ____(____   '---
      (_____)       (_______
      (_____)      (________
      (____)             (____)
---.__(___)               (___)__.---
'''
pr = '''
p1                                 p2
    _______               _______
---'   ____)____         (____   '---
          ______)       (_____)
          _______)      (_____)
         _______)        (____)
---.__________)           (___)__.---
'''
ps = '''
p1                                     p2
    _______                   _______
---'   ____)____         ____(____   '---
          ______)       (_______
          _______)     (________
         _______)            (____)
---.__________)               (___)__.---
'''
sr = '''
p1                                  p2 
    _______                _______
---'   ____)____          (____   '---
          ______)        (_____)
       __________)       (_____)
      (____)              (____)
---.__(___)                (___)__.---
'''
sp = '''
p1                                      p2 
    _______                    _______
---'   ____)____          ____(____   '---
          ______)        (______
       __________)      (_______
      (____)             (_______
---.__(___)                (__________.---
'''

print(rr)
print("Let's play a game!")

while not done:
    while True:
        player1 = getpass("Player1, rock, paper or scissors (r/p/s)? ")
        if player1 not in validAnswer:
            print("Invalid choice.")
        else:
            break

    while True:
        player2 = getpass("Player2,  rock, paper or scissors (r/p/s)? ")
        if player2 not in validAnswer:
            print("Invalid choice.")
        else:
            break

    if player1 == player2:
        if player1 == "r":
            print(rr)
        elif player1 == "p":
            print(pp)
        else:
            print(ss)
        print("It's a tie!")
    elif player1 == "r":
        if player2 == "p":
            print(rp)
            print("Player2 is the winner!")
        else:
            print(rs)
            print("Player1 is the winner!")
    elif player1 == "p":
        if player2 == "s":
            print(ps)
            print("Player2 is the winner!")
        else:
            print(pr)
            print("Player1 is the winner!")
    elif player1 == "s":
        if player2 == "r":
            print(sr)
            print("Player2 is the winner!")
        else:
            print(sp)
            print("Player1 is the winner!")

    while True:
        again = input("\nWould you like to play again (y/n)?")
        if again != "y" and again != "n":
            print("Invalid input.")
        elif again == "n":
            done = True
            break
        else:
            break
