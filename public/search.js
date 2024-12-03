        function openModal() {
            var searchInput = prompt("Enter your search");
            var user;
            var url;

            switch (searchInput.toUpperCase()) {
                case 'MALARIA':
                    user = "Click Here";
                    url = "malaria.html";
                    break;
                case 'TYPHOID':
                    user = "Click Here";
                    url = "typhoid.html";
                    break;
                case 'BILHARZIA':
                   user = "Click Here";
                    url = "bilharzia.html";
                    break;
                case 'CHOLERA':
                    user = "Click Here";
                    url = "cholera.html";
                    break;
                case 'DENGUE FEVER':
                    user = "Click Here";
                    url = "denguefever.html";
                    break;
                case 'EBOLA':
                    user = "Click Here";
                    url = "denguefever.html";
                    break;
                case 'FLU':
                    user = "Click Here";
                    url = "flu.html";
                    break;
                case 'HIV & AIDS':
                    user = "Click Here";
                    url = "hivaids.html";
                    break;
                case 'DEPRESSION':
                    user = "Click Here";
                    url = "mentalawareness.html";
                    break;
                case 'MIGRAINE':
                    user = "Click Here";
                    url = "migraine.html";
                    break;
                case 'MPOX':
                    user = "Click Here";
                    url = "mpox.html";
                    break;
                case 'TUBERCULOSIS':
                    user = "Click Here";
                    url = "tb.html";
                    break;
                case 'STRESS':
                    user = "Click Here";
                    url = "mentalawareness.html";
                    break;
                case 'TB':
                    user = "Click Here";
                    url = "tb.html";
                    break;
                case 'DEPRESSION':
                    user = "Click Here";
                    url = "mentalawareness.html";
                    break;
                case 'BIPOLAR':
                    user = "Click Here";
                    url = "mentalawareness.html";
                    break;
                case 'HIV':
                    user = "Click Here";
                    url = "hivaids.html";
                    break;
                case 'AIDS':
                    user = "Click Here";
                    url = "hivaids.html";
                    break;
                case 'INFLUENZA':
                    user = "Click Here";
                    url = "flu.html";
                    break;
                
                
                default:
                    user = "Search Not Found";
                    url = "#";
            }

            var outputContainer = document.getElementById('output-container');
            outputContainer.innerHTML = `
                <div>
                    <p><strong>Mental:</strong> ${user}<br>
                    <button onclick="window.location.href='${url}'"> ${user}</button>
                </div>
            `;
        }