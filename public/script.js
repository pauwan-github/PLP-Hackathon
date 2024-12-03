document.getElementById('diagnoseButton').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const symptoms = Array.from(document.querySelectorAll('input[name="symptoms"]:checked'))
        .map(symptom => symptom.value);

    let disease = '';
    let medication = '';
    let moreInfoUrl = '#'; // Default link if no specific disease

    if (symptoms.includes('Fever') && symptoms.includes('Cough')) {
        disease = 'Flu';
        medication = 'Rest, hydration, and over-the-counter medication';
        moreInfoUrl = 'flu.html';
    } 
    if (symptoms.includes('Headache') && symptoms.includes('Fatigue')) {
        disease += (disease ? ' or ' : '') + 'Migraine';
        medication += (medication ? ' Also, ' : '') + 'Pain relievers and rest';
        moreInfoUrl = 'migraine.html';
    }
    if (symptoms.includes('Fever') && symptoms.includes('Fatigue') && symptoms.includes('Rashes') && symptoms.includes('Internal Bleeding') && symptoms.includes('External Bleeding') && symptoms.includes('Vomiting') && symptoms.includes('Diarrhoea') && symptoms.includes('Muscle Pain')) {
        disease += (disease ? ' or ' : '') + 'Ebola Virus Disease';
        medication += (medication ? ' Also, ' : '') + 'Antiretroviral drugs and taking antiretriviral Test';
        moreInfoUrl = 'ebola.html';
    }
    if (symptoms.includes('Chronic Cases') && symptoms.includes('Abdominal Pain') && symptoms.includes('Itchy Skin') && symptoms.includes('Rashes') && symptoms.includes('Blood in Stool')) {
        disease += (disease ? ' or ' : '') + 'Schistosomiasis (Bilharzia)';
        medication += (medication ? ' Also, ' : '') + 'Antiretroviral drugs and taking antiretriviral Test';
        moreInfoUrl = 'bilharzia.html';
    }
    if (symptoms.includes('Sore Throat') && symptoms.includes('Weight Loss') && symptoms.includes('Opportunistic Diseases')) {
        disease += (disease ? ' or ' : '') + 'HIV & AIDS';
        medication += (medication ? ' Also, ' : '') + 'Antiretroviral drugs and taking antiretriviral Test';
        moreInfoUrl = 'hivaids.html';
    }
    if (symptoms.includes('Diarrhoea') && symptoms.includes('Dehydration') && symptoms.includes('Muscle Cramps') && symptoms.includes('Vomiting')) {
        disease += (disease ? ' or ' : '') + 'Cholera';
        medication += (medication ? ' Also, ' : '') + 'Antiretroviral drugs and taking antiretriviral Test';
        moreInfoUrl = 'cholera.html';
    }
    if (symptoms.includes('Cough') && symptoms.includes('Chest Pain') && symptoms.includes('Fever') && symptoms.includes('Sweat') && symptoms.includes('Weight Loss')) {
        disease += (disease ? ' or ' : '') + 'Tuberculosis';
        medication += (medication ? ' Also, ' : '') + 'Antiretroviral drugs and taking antiretriviral Test';
        moreInfoUrl = 'tb.html';
    }
    if (symptoms.includes('Weak') && symptoms.includes('Constipation') && symptoms.includes('Diarrhoea') && symptoms.includes('Fatigue') && symptoms.includes('Fever') && symptoms.includes('Abdominal Pain')) {
        disease += (disease ? ' or ' : '') + 'Typhoid';
        medication += (medication ? ' Also, ' : '') + 'Antiretroviral drugs and taking antiretriviral Test';
        moreInfoUrl = 'typhoid.html';
    }
    if (symptoms.includes('Fever') && symptoms.includes('Chills') && symptoms.includes('Body Aches') && symptoms.includes('Fatigue') && symptoms.includes('Sweating') && symptoms.includes('Vomiting')) {
        disease += (disease ? ' or ' : '') + 'Malaria';
        medication += (medication ? ' Also, ' : '') + 'Antiretroviral drugs and taking antiretriviral Test';
        moreInfoUrl = 'malaria.html';
    }
    if (symptoms.length === 0) {
        disease = 'No significant symptoms detected';
        medication = 'None required';
        moreInfoUrl = '#';
    } 
    if (!disease) {
        disease = 'Unknown disease';
        medication = 'Consult a doctor for proper diagnosis';
        moreInfoUrl = '#';
    }

    const output = document.getElementById('output');
    if (name && gender) {
        output.innerHTML = `
            <p>Hello: ${name}!</p>
            <p>Gender: ${gender}</p>
            <p>Inserted symptoms are: ${symptoms.length ? symptoms.join(', ') : 'No symptoms selected.'}</p>
            <p>You are likely to be having: ${disease}</p>
            <p>Suggested Medication and activities are: ${medication}</p>
        `;

        // Create "More Info" button
        const moreInfoButton = document.createElement('button');
        moreInfoButton.textContent = 'Learn More';
        moreInfoButton.style.marginTop = '10px';
        moreInfoButton.style.padding = '10px 15px';
        moreInfoButton.style.backgroundColor = '#28a745';
        moreInfoButton.style.color = '#fff';
        moreInfoButton.style.border = 'none';
        moreInfoButton.style.borderRadius = '5px';
        moreInfoButton.style.cursor = 'pointer';

        moreInfoButton.addEventListener('click', function () {
            window.open(moreInfoUrl, '_blank');
        });

        // Append button to the output
        output.appendChild(moreInfoButton);
    } else {
        output.innerHTML = '<p>Please complete all fields!</p>';
    }
});
