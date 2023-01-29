Attribute VB_Name = "Module1"
Option Explicit

Sub 주문집계장기록()


Dim 주문대장 As Worksheet
Dim 주문집계장 As Worksheet

Dim 주문대장_끝행 As Long
Dim 주문집계장_끝행 As Long

Dim i As Long


Set 주문대장 = Worksheets("주문대장")
Set 주문집계장 = Worksheets("주문집계장")

주문대장_끝행 = 주문대장.Range("A65536").End(xlUp).Row
주문집계장_끝행 = 주문집계장.Range("A65536").End(xlUp).Row


For i = 8 To 주문대장_끝행
  
  주문집계장_끝행 = 주문집계장_끝행 + 1

  주문집계장.Cells(주문집계장_끝행, 1) = 주문대장.Cells(i, 1)
  주문집계장.Cells(주문집계장_끝행, 2) = 주문대장.Cells(i, 2)
  주문집계장.Cells(주문집계장_끝행, 3) = 주문대장.Cells(i, 3)
  주문집계장.Cells(주문집계장_끝행, 4) = 주문대장.Cells(i, 4)
  주문집계장.Cells(주문집계장_끝행, 5) = 주문대장.Cells(i, 5)
  주문집계장.Cells(주문집계장_끝행, 6) = 주문대장.Cells(i, 6)
  주문집계장.Cells(주문집계장_끝행, 7) = 주문대장.Cells(i, 7)
     
Next i

주문집계장.Activate

End Sub

