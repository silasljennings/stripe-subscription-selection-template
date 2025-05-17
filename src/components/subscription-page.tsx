
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "./ui/card"
import {Button} from "./ui/button";
import {Label} from "@radix-ui/react-label";

{/* TODO: Handle button actions:
        1. initialize 2fa to continue using the email set in the req params and passed in to the subscriptionPage
        2. once validated, initiate a payment intent and redirect the user to the stripe payment flow
        3. need to make the pay as you go interface have an input field that sets the number of credits wanting to purchase
        4. on validation of 3fa for 3, create the payment intent based off the number of credits
*/}
export function SubscriptionPage() {
    return (
        <div className="flex justify-center flex-col">
            <div className="text-center">
                {/* Heading */}
                <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">Choose Your Plan</h1>
                <p className="text-lg text-gray-500">Pick the plan that works best for you and get started with all the
                    benefits!</p>
            </div>
            <div className="flex items-top justify-center pt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <Card className="w-[350px]">
                        <CardHeader>
                            <CardTitle>Pro</CardTitle>
                            <CardDescription>Become a pro member for just $4.99 and get access to the following features:</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Label className="block mb-2">Feature 1</Label>
                            <Label className="block mb-2">Feature 2</Label>
                            <Label className="block mb-2">Feature 3</Label>
                            <Label className="block mb-2">Feature 4</Label>
                            <Label className="block mb-2">Feature 5</Label>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button className="w-full">Subscribe for $4.99</Button>
                        </CardFooter>
                    </Card>

                    <Card className="w-[350px]">
                        <CardHeader>
                            <CardTitle>Premium</CardTitle>
                            <CardDescription>Become a premium member for just $9.99 and get access to the following features:</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Label className="block mb-2">Feature 1</Label>
                            <Label className="block mb-2">Feature 2</Label>
                            <Label className="block mb-2">Feature 3</Label>
                            <Label className="block mb-2">Feature 4</Label>
                            <Label className="block mb-2">Feature 5</Label>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button className="w-full">Subscribe for $9.99</Button>
                        </CardFooter>
                    </Card>

                    <Card className="w-[350px]">
                        <CardHeader>
                            <CardTitle>Pay as you Go</CardTitle>
                            <CardDescription>Buy credits and get access to the following features:</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Label className="block mb-2">Feature 1</Label>
                            <Label className="block mb-2">Feature 2</Label>
                            <Label className="block mb-2">Feature 3</Label>
                            <Label className="block mb-2">Feature 4</Label>
                            <Label className="block mb-2">Feature 5</Label>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button className="w-full">Get Credits</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>

    );
}

