Attribute VB_Name = "Module1"
Option Explicit

Sub �ֹ���������()


Dim �ֹ����� As Worksheet
Dim �ֹ������� As Worksheet

Dim �ֹ�����_���� As Long
Dim �ֹ�������_���� As Long

Dim i As Long


Set �ֹ����� = Worksheets("�ֹ�����")
Set �ֹ������� = Worksheets("�ֹ�������")

�ֹ�����_���� = �ֹ�����.Range("A65536").End(xlUp).Row
�ֹ�������_���� = �ֹ�������.Range("A65536").End(xlUp).Row


For i = 8 To �ֹ�����_����
  
  �ֹ�������_���� = �ֹ�������_���� + 1

  �ֹ�������.Cells(�ֹ�������_����, 1) = �ֹ�����.Cells(i, 1)
  �ֹ�������.Cells(�ֹ�������_����, 2) = �ֹ�����.Cells(i, 2)
  �ֹ�������.Cells(�ֹ�������_����, 3) = �ֹ�����.Cells(i, 3)
  �ֹ�������.Cells(�ֹ�������_����, 4) = �ֹ�����.Cells(i, 4)
  �ֹ�������.Cells(�ֹ�������_����, 5) = �ֹ�����.Cells(i, 5)
  �ֹ�������.Cells(�ֹ�������_����, 6) = �ֹ�����.Cells(i, 6)
  �ֹ�������.Cells(�ֹ�������_����, 7) = �ֹ�����.Cells(i, 7)
     
Next i

�ֹ�������.Activate

End Sub

