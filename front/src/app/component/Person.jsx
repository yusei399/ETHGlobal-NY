import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Text, Button, Center } from '@chakra-ui/react';




const Person = (props) => {
	const prop = props.person;
	const cardFooterStyle = {
		display: "flex",
		justifyContent: "space-between", // ボタンを右に寄せる
		alignItems: "flex-end", // ボタンを下に寄せる
	  };
	return(
		<>
			<Card width={400} height={200}>
				<CardHeader>
					<Text>{prop.roll}</Text>
				</CardHeader>
				<CardBody>
					{/* <Image src={prop.image} alt={prop.name} width={70} height={75} /> */}
					<Text>{prop.name}</Text>
				</CardBody>
				<CardFooter style={cardFooterStyle}>
					<Text>{prop.sex}</Text>
					<Button>詳細</Button>
				</CardFooter>
			</Card>
		</>
	)
}


export default Person;