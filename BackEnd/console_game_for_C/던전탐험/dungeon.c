#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int login();
void intro();

int main() 
{
    int state = 0;
    intro(); 
    state = login();

    if(state) {

    }
    else {
        return 0;
    }

}
