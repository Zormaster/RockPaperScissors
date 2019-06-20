done = False
validAnswer = {"rock", "paper", "scissors"}
print("Let's play a game!")

while not done:
    while True:
        player1 = input("Player1, rock, paper or scissors? ")
        if player1 not in validAnswer:
            print("Invalid choice.")
        else:
            break

    while True:
        player2 = input("Player2, rock, paper or scissors? ")
        if player2 not in validAnswer:
            print("Invalid choice.")
        else:
            break

    if player1 == player2:
        print("It's a tie!")
    elif player1 == "rock":
        if player2 == "paper":
            print("Player2 is the winner!")
        else:
            print("Player1 is the winner!")
    elif player1 == "paper":
        if player2 == "scissors":
            print("Player2 is the winner!")
        else:
            print("Player1 is the winner!")
    elif player1 == "scissors":
        if player2 == "rock":
            print("Player2 is the winner!")
        else:
            print("Player1 is the winner!")

    while True:
        again = input("Would you like to play again (y/n)?")
        if again != "y" and again != "n":
            print("Invalid input.")
        elif again == "n":
            done = True
            break
        else:
            break
