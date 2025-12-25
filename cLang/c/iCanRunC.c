#include <stdio.h>
int main()
{
  int b;
  register int a = 78;
  b = 23;
  printf("\nI am doing `a bit wise` operations:");
  printf("\n\tAND: %d & %d = %d", a, b, a & b);
  printf("\n\tOR: %d | %d = %d", a, b, a | b);
  printf("\n\tXOR: %d ^ %d = %d", a, b, a ^ b);
  printf("\n\tNOT: ~ %d = %d, ~ %d = %d", a, ~a, b, ~b);
  printf("\n\tLEFTsHIFT: %d << 2 = %d", a, a << 2);
  printf("\n\tRIGHTsHIFT: %d >> 2 = %d", a, a >> 2);
  int e;
  printf("\nSize of int is %d bytes", sizeof(e));
  float f;
  printf("\nSize of float is %d bytes", sizeof(f));
  double g;
  printf("\nSize of double is %d bytes", sizeof(g));
  char h;
  printf("\nSize of char is %d bytes", sizeof(h));
  long i;
  printf("\nSize of long is %d bytes", sizeof(i));
  short j;
  printf("\nSize of short is %d bytes", sizeof(j));
  printf("\n\vEnter \vA value for e >>", sizeof(j));
  /* escapees */
  printf("\\\n audible alert\a.back[\b]space.form feed \f. A new line\n. carriage return\r. tab\t. vertical tab \v. Question mark\?. Backslash\\.Null\0");
  /* while */
  while (a < /* 46 */ 85)
  {
    printf("\n\nThis is the %dst value <c>", a - 77);
    a++;
  }
  /* for */
  for (int i = 0; i < 5; i++)
  {
    printf("\nThis is a for loop: %d", i);
  }
  /* do while */
  do
  {
    printf("\n\nThis is the %dst value\n", a - 77);
    a++;
  } while (a < 85);
  /* nesting loops */
  for (int i = 0; i < 30; i+=3)
  {
    for (int k =(30 - i); k > 0; k-=3)
    {
      printf(" ");
    }
    for (int j = 0; j < (i * 2 - 3); j+=3)
    {
      if (j % 5 && i > 16 && i < 19)
      {
        printf("O");
      }else printf(".");

    }

    printf("\n");
  }

  return 0;
}
