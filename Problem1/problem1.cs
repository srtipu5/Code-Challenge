using System;
class ThirdLargestNumber {
 
static void thirdLargest(int[] arr, int arrSize)
{
    // Check minimum array elements 

    if (arrSize < 3)
    {
        Console.Write(" Invalid Input ");
        return;
         
    }
 
    // Initialize firstLargeNumber, secondLargeNumber and thirdLargeNumber

    int firstLargeNumber = arr[0], secondLargeNumber = int.MinValue,thirdLargeNumber = int.MinValue;
 
    // Traverse array elements from second elements to last elements

    for (int i = 1; i < arrSize; i++)
    {
        // If current element is greater than first

        if (arr[i] > firstLargeNumber) {
            thirdLargeNumber = secondLargeNumber;
            secondLargeNumber = firstLargeNumber;
            firstLargeNumber = arr[i];
        }
         
        // If current element is greater than firstLargeNumber but smaller than secondLargeNumber 

        else if (arr[i] > secondLargeNumber) {
            thirdLargeNumber = secondLargeNumber;
            secondLargeNumber = arr[i];
        }

         // If current element is greater than secondLargeNumber but smaller than thirdLargeNumber   
        
        else {
            thirdLargeNumber = arr[i];
        }
    }
 
    Console.Write("The third Largest element is "+ thirdLargeNumber);
}
 
public static void Main() {
        int[] arr = {1, 14, 2, 16, 10, 20};
        int arrSize = arr.Length;
        thirdLargest(arr, arrSize);
    }
}
 