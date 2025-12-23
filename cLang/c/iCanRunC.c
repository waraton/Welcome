#include <stdio.h>
int main()
{
  int b;
  register int a = 78;
  b = 23;
  printf("\nIam doing `a bit wise` operations:");
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
  printf("\n\vEnter \va value for e >>", sizeof(j));
/* esca9ees */
  printf("\\\naudible alert\a.back[\b]space.form feed \f. A new line\n. carriage return\r. tab\t. vertical tab \v. Qn mark\?. Backslash\\.Null\0");
/* while */
  while (a < /* 46 */85)
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
    printf("\n\nThis is the %dst value", a - 77);
    a++;
  } while (a < 85);
  /* nesting loos */
  for (int i = 1; i < 25; i++){
    for (int j = 1; j < (i - (15 - j)) ; j++)
    {
    printf("*");
    }
    printf("\r\1");
  }

  return 0;
}
