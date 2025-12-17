import os
import random
import time
from getpass import getpass

# Colors for terminal
class Colors:
    HEADER = '\033[95m'
    BLUE = '\033[94m'
    CYAN = '\033[96m'
    GREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

# ASCII Art
ROCK_ROCK = '''
    _______           _______
---'   ____)         (____   '---
      (_____)       (_____)
      (_____)       (_____)
      (____)         (____)
---.__(___)           (___)__.---
'''

PAPER_PAPER = '''
    _______                   _______
---'   ____)____         ____(____   '---
          ______)       (_______
          _______)     (________
         _______)       (________
---.__________)           (__________.---
'''

SCISSORS_SCISSORS = '''
    _______                    _______
---'   ____)____          ____(____   '---
          ______)        (_______
       __________)      (__________
      (____)                  (____)
---.__(___)                    (___)__.---
'''

ROCK_PAPER = '''
    _______               _______
---'   ____)         ____(____   '---
      (_____)       (_______
      (_____)      (________
      (____)        (________
---.__(___)           (__________.---
'''

ROCK_SCISSORS = '''
    _______               _______
---'   ____)         ____(____   '---
      (_____)       (_______
      (_____)      (________
      (____)             (____)
---.__(___)               (___)__.---
'''

PAPER_ROCK = '''
    _______               _______
---'   ____)____         (____   '---
      (_____)       (_____)
      (_____)       (_____)
      (____)        (____)
---.__________)           (___)__.---
'''

PAPER_SCISSORS = '''
    _______                   _______
---'   ____)____         ____(____   '---
          ______)       (_______
          _______)     (________
         _______)            (____)
---.__________)               (___)__.---
'''

SCISSORS_ROCK = '''
    _______                _______
---'   ____)____          (____   '---
          ______)        (_____)
       __________)       (_____)
      (____)              (____)
---.__(___)                (___)__.---
'''

SCISSORS_PAPER = '''
    _______                    _______
---'   ____)____          ____(____   '---
          ______)        (______
       __________)      (_______
      (____)             (_______
---.__(___)                (__________.---
'''

TITLE_SCREEN = r'''
  _______  _______  _______  _______    _______  ______   _______  _______  _______ 
 (  ____ )(  ___  )(  ____ \(  ____ \  (  ____ )(  __  \ (  ___  )(  ___  )(  ____ )
 | (    )|| (   ) || (    \/| (    \/  | (    )|| (  \  )| (   ) || (   ) || (    )|
 | (____)|| |   | || |      | |        | (____)|| |   ) || (___) || (___) || (____)|
 |     __)| |   | || | ____ | | ____   |  _____)| |   | ||  ___  ||  ___  ||     __)
 | (\ (   | |   | || | \_  )| | \_  )  | (      | |   ) || (   ) || (   ) || (\ (   
 | ) \ \__| (___) || (___) || (___) |  | )      | (__/  )| )   ( || )   ( || ) \ \__
 |/   \__/(_______)(_______)(_______)  |/       (______/ |/     \||/     \||/   \__/
                                                                                      
          _______  _______  _______  _______  _______  _______  _______ 
         (  ____ \(  ____ \(  ____ \/ ___   )(  ___  )(  ____ )(  ____ \
         | (    \/| (    \/| (    \/\/   )  || (   ) || (    )|| (    \/
         | (_____ | |      | (_____     /   )| |   | || (____)|| (_____ 
         (_____  )| |      (_____  )   /   / | |   | ||     __)(_____  )
               ) || |            ) |  /   /  | |   | || (\ (         ) |
         /\____) || (____/\/\____) | /   (_/\| (___) || ) \ \__/\____) |
         \_______)(_______/\_______)(_______/(_______)|/   \__/\_______)
'''

def clear_screen():
    os.system('cls' if os.name == 'nt' else 'clear')

def get_input(prompt, valid_options, hide=False):
    while True:
        if hide:
            choice = getpass(prompt).lower().strip()
        else:
            choice = input(prompt).lower().strip()
            
        if choice in valid_options:
            return choice
        print(f"{Colors.FAIL}Invalid choice. Please try again.{Colors.ENDC}")

def print_result(p1_move, p2_move, p1_name="Player 1", p2_name="Player 2"):
    print(f"\n{Colors.CYAN}{p1_name} chose {p1_move.upper()}!{Colors.ENDC}")
    print(f"{Colors.CYAN}{p2_name} chose {p2_move.upper()}!{Colors.ENDC}\n")
    
    # Display Art
    if p1_move == 'r':
        if p2_move == 'r': print(ROCK_ROCK)
        elif p2_move == 'p': print(ROCK_PAPER)
        elif p2_move == 's': print(ROCK_SCISSORS)
    elif p1_move == 'p':
        if p2_move == 'r': print(PAPER_ROCK)
        elif p2_move == 'p': print(PAPER_PAPER)
        elif p2_move == 's': print(PAPER_SCISSORS)
    elif p1_move == 's':
        if p2_move == 'r': print(SCISSORS_ROCK)
        elif p2_move == 'p': print(SCISSORS_PAPER)
        elif p2_move == 's': print(SCISSORS_SCISSORS)

def determine_winner(p1, p2):
    # Returns 0 for tie, 1 for p1, 2 for p2
    if p1 == p2:
        return 0
    elif (p1 == 'r' and p2 == 's') or \
         (p1 == 'p' and p2 == 'r') or \
         (p1 == 's' and p2 == 'p'):
        return 1
    else:
        return 2

def main():
    # Enable ANSI colors in Windows terminal if needed
    os.system('color')
    
    scores = [0, 0] # [Player 1, Player 2/CPU]
    
    while True:
        clear_screen()
        print(Colors.HEADER + TITLE_SCREEN + Colors.ENDC)
        print(f"{Colors.BOLD}WELCOME TO THE EPIC BATTLE!{Colors.ENDC}\n")
        print("1. Player vs Computer")
        print("2. Player vs Player")
        print("3. Exit")
        
        mode = get_input(f"\n{Colors.GREEN}Select Mode (1-3): {Colors.ENDC}", ['1', '2', '3'])
        
        if mode == '3':
            print(f"\n{Colors.HEADER}Thanks for playing! Stay epic!{Colors.ENDC}")
            break
            
        p2_is_cpu = (mode == '1')
        p2_name = "Computer" if p2_is_cpu else "Player 2"
        scores = [0, 0]
        
        while True:
            clear_screen()
            print(f"{Colors.HEADER}=== SCOREBOARD ==={Colors.ENDC}")
            print(f"Player 1: {Colors.GREEN}{scores[0]}{Colors.ENDC} | {p2_name}: {Colors.FAIL}{scores[1]}{Colors.ENDC}")
            print("==================\n")
            
            # Player 1 turn
            print(f"{Colors.BOLD}Player 1's Turn...{Colors.ENDC}")
            p1_move = get_input("Choose (r)ock, (p)aper, or (s)cissors: ", ['r', 'p', 's'], hide=True)
            
            # Player 2 turn
            if p2_is_cpu:
                print(f"{Colors.BOLD}Computer is thinking...{Colors.ENDC}")
                time.sleep(1) # Suspense
                p2_move = random.choice(['r', 'p', 's'])
            else:
                print(f"{Colors.BOLD}{p2_name}'s Turn...{Colors.ENDC}")
                p2_move = get_input(f"{p2_name}, choose (r)ock, (p)aper, or (s)cissors: ", ['r', 'p', 's'], hide=True)
            
            # Reveal
            print_result(p1_move, p2_move, "Player 1", p2_name)
            
            winner = determine_winner(p1_move, p2_move)
            
            if winner == 0:
                print(f"\n{Colors.WARNING}IT'S A TIE!{Colors.ENDC}")
            elif winner == 1:
                print(f"\n{Colors.GREEN}PLAYER 1 WINS THIS ROUND!{Colors.ENDC}")
                scores[0] += 1
            else:
                print(f"\n{Colors.FAIL}{p2_name.upper()} WINS THIS ROUND!{Colors.ENDC}")
                scores[1] += 1
                
            play_again = get_input(f"\n{Colors.CYAN}Play another round? (y/n): {Colors.ENDC}", ['y', 'n'])
            if play_again == 'n':
                break

if __name__ == "__main__":
    main()
