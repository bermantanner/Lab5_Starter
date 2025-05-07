# Lab 5 - Starter
1. I think that you can use unit tests to test the LOGIC of the message feature, like function triggers and creating the message, but actually sending the message between two users across a network and storing texts seems to be out of the scope of unit testing.
2. Yes, you would most definitely use a unit test for this one. The reason is because the logic is isolated and there are clear pass and fails. This stays away from anything network related or interaction with other code, this is nice and isolated, which seems to be the best set up for a unit test.
