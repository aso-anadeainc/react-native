import usePortraitOrientation from '@/hooks/useOrientation';
import {  useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button, Animated } from 'react-native';

const BoxBreathing: React.FC = () => {
	const isPortrait = usePortraitOrientation();
	const [isAnimating, setIsAnimating] = useState(false);


	const steps = ['Inhale slowly counting to 4', 'Hold your breath for 4 seconds', 'Exhale slowly counting to 4', 'Hold your breath for 4 seconds'];
	const xPosition = useRef(new Animated.Value(0)).current;
	const yPosition = useRef(new Animated.Value(0)).current;

	const startAnimation = () => {
		const duration = 4000;
		const size = 200 - 6.5;
		setIsAnimating(true);
		
			Animated.sequence([
				Animated.timing(xPosition, {
					toValue: size,
					duration,
					useNativeDriver: true,
				}),
				Animated.timing(yPosition, {
					toValue: size,
					duration,
					useNativeDriver: true,
				}),
				Animated.timing(xPosition, {
					toValue: 0,
					duration,
					useNativeDriver: true,
				}),
				Animated.timing(yPosition, {
					toValue: 0,
					duration,
					useNativeDriver: true,
				}),
			]).start();
	};

	useEffect(() => {
		if (isAnimating) {
			setTimeout(() => {
				setIsAnimating(false);
			}, 16000);
		}
	}, [isAnimating]);
	return (
		<View
			style={styles.mainContainer}>
			<Text>Box Breathing</Text>
			<Text>The 'Box Breathing' method helps reduce stress and improve focus. Breathe slowly, following the instructions</Text>

			<View style={[styles.container, !isPortrait && { width: '60%' }]}>
				{steps.map((step, index) => (
					<View style={styles.item} key={index}>
						<Text>
							<Text style={{ fontWeight: 700 }}>Step {index + 1}: </Text>
							{step}
						</Text>
					</View>
				))}
			</View>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', width: 200, height: 200, borderWidth: 5, borderColor: 'black' }}>
				<Animated.View
					style={[
						styles.dot,
						{
							transform: [{ translateX: xPosition }, { translateY: yPosition }],
						},
					]}
				/>
			</View>
			<View style={[styles.button, isAnimating && {opacity: 0.5}]}>
				<Button title="Start" onPress={startAnimation} color="white" disabled={isAnimating}/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer : {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 30,
		gap: 20
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		marginTop: 10,
		marginLeft: -10,
		marginRight: -10,
		marginBottom: 20,
		padding: 0,
		width: '100%',
		flexDirection: 'row',
		gap: 10
	},
	item: {
		display: 'flex',
		width: '48%',
		padding: 10,
		backgroundColor: 'lightgreen',
	},
	button: {
		width: '100%',
		backgroundColor: 'lightgreen',
	},
	breathContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: 'black',
		borderWidth: 5,
		borderRadius: 50,
		marginBottom: 50,
		position: 'relative',
	},
	dot: {
		borderRadius: 100,
		backgroundColor: 'black',
		position: 'absolute',
		left: -9.5,
		top: -9.5,
		width: 15,
		height: 15,
	},
});

export default BoxBreathing;
