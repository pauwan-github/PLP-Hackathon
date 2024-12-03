document.getElementById('submitSurvey').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const occupation = document.getElementById('occupation').value;
    const behaviors = Array.from(document.querySelectorAll('input[name="behaviors"]:checked'))
        .map(behavior => behavior.value);

        let condition='';

    let suggestions = [];
    if (behaviors.includes('Stress')) {
        suggestions.push('Practice mindfulness or meditation.');
        condition = 'This is likely from Psychological Factors';
    }
    if (behaviors.includes('Isolation')) {
        suggestions.push('Join a social club or connect with family and friends.');
        condition = '';
    }
    if (behaviors.includes('Lack of Sleep')) {
        suggestions.push('Establish a regular sleep routine and avoid caffeine before bed.');
        condition = '';
    }
    if (behaviors.includes('Mood Swings')) {
        suggestions.push('Engage in physical activity and seek professional help if needed.');
        condition = '';
    }
    if (behaviors.includes('Restlessness') || behaviors.includes('Fear') || behaviors.includes('Trembling') || behaviors.includes('Low Focus') || behaviors.includes('Overreacting') || behaviors.includes('Mood Swings') || behaviors.includes('Physical Symptoms')) {
        suggestions.push('<ul><li>Deep breathing exercises to calm the nervous system.</li> <li>Grounding Techniques: Use the "5-4-3-2-1" method (name five things you can see, four you can touch, etc.) to stay in the present moment.</li> <li>Tense and release muscle groups to reduce physical tension.</li> <li>Spend time outdoors to alleviate stress and enhance relaxation.</li> <li>Avoid substances that can exacerbate anxiety symptoms.</li> <li>Maintain consistency in sleep, meals, and activities.</li></ul></p>');
        condition = 'This is likely to be anxiety disorders.';
    }

    if (behaviors.includes('Persistent Sadness') || behaviors.includes('Loss of Interest') || behaviors.includes('Isolation') || behaviors.includes('Poor Concentration') || behaviors.includes('Frustration') || behaviors.includes('Self-blame') || behaviors.includes('Suicidal Thoughts')) {
        suggestions.push('<ul><li>Practice mindfulness or meditation.</li> <li>Write down your thoughts and feelings to process emotions and identify triggers.</li> <li>Spend time with supportive friends or family to reduce feelings of isolation.</li> <li>List things to be thankful for to shift focus away from negativity.</li> <li>Use techniques to stay present and reduce ruminative thoughts.</li> <li>Accomplish manageable tasks to build a sense of achievement.</li></ul></p>');
        condition = 'This is likely to be <b>Depression</b>.';
    }

    if (behaviors.includes('Flashbacks') || behaviors.includes('Nightmares') || behaviors.includes('Hypervigilance') || behaviors.includes('Emotional numbness') || behaviors.includes('Aggressiveness') || behaviors.includes('Guilt')) {
        suggestions.push('<ul><li>Engage in gentle yoga to improve body awareness and reduce stress.</li> <li>Use art, music, or writing to express emotions related to trauma.</li> <li>Create a physical or mental environment that feels secure and calming.</li> <li>Try guided meditations, aromatherapy, or warm baths.</li> <li> Join groups with others who understand and share similar experiences.</li> <li>Activities like running or cycling help regulate the body’s stress response.</li></ul></p>');
        condition = 'This is likely to be <b>Post-Traumatic Stress Disorder (PTSD)</b>.';
    }

    if (behaviors.includes('Hyperactive') || behaviors.includes('Excessive Talking') || behaviors.includes('Impulsive Behaviors') || behaviors.includes('Inflated Self-esteem') || behaviors.includes('Decreased Sleep Time') || behaviors.includes('Racing Thoughts')) {
        suggestions.push('<ul><li>Use a journal or app to monitor mood changes and recognize patterns.</li> <li>Stick to consistent sleep and meal schedules to stabilize mood.</li> <li>Engage in painting, writing, or playing music during both manic and depressive phases.</li> <li>During manic phases, use calming activities like yoga or reading; during depressive phases, engage in energizing activities like walking.</li> <li> Avoid alcohol, caffeine, or recreational drugs that can trigger mood swings.</li> <li>Practice relaxation techniques to prevent mood instability.</li></ul></p>');
        condition = 'This is likely to be <b>Bipolar Disorder</b>.';
    }

    
    

    const output = document.getElementById('output');
    if (name && age && gender && occupation) {
        // Generate Documentation
        output.innerHTML = `
            <h3>Documentation</h3>
            <p><strong>Hello!</strong> ${name}</p><br>
            <p><strong>Age:</strong> ${age}</p><br>
            <p><strong>Gender:</strong> ${gender}</p><br>
            <p><strong>Occupation:</strong> ${occupation}</p><br>
            <h4>Behavior Analysis</h4>
            <p>${behaviors.length ? behaviors.join(', ') : 'No behaviors selected.'}</p><br>
            <p><strong>Condition:</strong> ${condition}</p><br>
            <h4>You should try out these activities</h4>
            <ul>${suggestions.length ? suggestions.map(s => `<li>${s}</li>`).join('') : '<li>No specific activities suggested.</li>'}</ul>
            <button id="moreInfo">Learn More About Mental Health</button>
        `;

        // Add functionality to the "Learn More" button
        const moreInfoButton = document.getElementById('moreInfo');
        moreInfoButton.addEventListener('click', function () {
            window.open('mentalawareness.html', '_blank');
        });
    } else {
        output.innerHTML = '<p>Please complete all fields!</p>';
    }
});
