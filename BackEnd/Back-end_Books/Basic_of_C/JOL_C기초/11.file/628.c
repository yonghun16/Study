#include <stdio.h>
#include <stdlib.h>

typedef struct
{
    char name[20];
    int score;
    int rank;
}Student;

int main(void)
{
    Student *p = (Student *)malloc(sizeof(Student)*10);

    for(int i=0; i<10; i++){
        fscanf(stdin, "%s %d", p[i].name, &p[i].score);
        p[i].rank = 1;
    }

    for(int i=0; i<10; i++){
        for(int j=0; j<10; j++){
            if(p[i].score < p[j].score)
                p[i].rank++;
        }
    }
    fprintf(stdout, "Name Score Rank\n");
    for(int i=0; i<10; i++){
        fprintf(stdout, "%4s %5d %4d\n", p[i].name, p[i].score, p[i].rank);
    }

    free(p);

    return 0;
}
