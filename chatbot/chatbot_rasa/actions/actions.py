# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

 from typing import Any, Text, Dict, List

 from rasa_sdk import Action, Tracker
 from rasa_sdk.executor import CollectingDispatcher


 class ActionHelloWorld(Action):
     def add_numbers(num1, num2):
         result = num1 + num2
         return result

     def subtract_numbers(num1, num2):
         result = num1 - num2
         return result
     
     def product_numbers(num1, num2):
         result = num1 * num2
         return result   
        
     def division_numbers(num1, num2):
         result = num1/num2
         return result  
     
     def name(self) -> Text:
         return "action_hello_world"

     def run(self, dispatcher: CollectingDispatcher,tracker: Tracker,domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
         
        operation = tracker.latest_message['text']
        n1=int(input("Enter number 1"))
        n2=int(input("Enter number 2"))
        
        num1 = float(tracker.get_slot('num1'))
        num2 = float(tracker.get_slot('num2'))

        if operation == 'add':
            result = add_numbers(num1, num2)
            message = f"The result of adding {num1} and {num2} is {result}."
        elif operation == 'subtract':
            result = subtract_numbers(num1, num2)
            message = f"The result of subtracting {num2} from {num1} is {result}."
        elif operation == 'product':
            result = product_numbers(num1, num2)
            message = f"The result of product of {num1} and {num2} is {result}." 
        elif operation == 'division':
            result = division_numbers(num1, num2)
            message = f"The result of division {num1} by {num2} is {result}."
        
         dispatcher.utter_message(text="Hello World!")

         return []
