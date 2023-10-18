package com.jsp.pack2;

public class PangramChecker {
	  public static void main(String[] args) {
	        String input = "HI i iam gowtham looking for job"; 

	        boolean isPangram = isPangram(input);

	        if (isPangram) {
	            System.out.println("The input is a pangram.");
	        } else {
	            System.out.println("The input is not a pangram.");
	        }
	    }
	    public static boolean isPangram(String input) {
	
	        boolean[] alphabetPresent = new boolean[26];
      
	        input = input.toLowerCase();
   
	        for (int i = 0; i < input.length(); i++) {
	            char currentChar = input.charAt(i);

	            if (currentChar >= 'a' && currentChar <= 'z') {
	                int index = currentChar - 'a';
	                alphabetPresent[index] = true;
	            }
	        }
	        for (boolean letterPresent : alphabetPresent) {
	            if (!letterPresent) {
	                return false; 
	            }
	        }
	        return true; 
	    }
}
