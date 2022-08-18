const tag = "guest@projectpleiades.org:-$";

const supportedCommands = {

    "help": "This displays all supported commands",
    "whoami": "This prints a description of the co founder of Pleiades+",
    "clear": "This clears the screen",
    "project[s] [project name]": "This displays a number of projects by Sebastian",
    
}


const projects = {

    "Project Pleiades": "A new era of distributed systems",
    "Project Paradox": "Intercepting and injecting false packets for the purpose of throwing a high school party",
    "Pleiades Plus": "A stylish way to display my abilities(totally didnt rip off ForrestKnight)",

}



function executeCommand(command) {

    commandArray = command.split(" ")

    console.log(supportedCommands[commandArray[0]]);
    
    switch(commandArray[0]) {

        case "help":
            terminalOutput(command, supportedCommands);
            break;
        case "clear":
            document.getElementById("terminal").innerHTML = " ";
            break;
        case "whoami":
            terminalOutput(command, "Sebastian Cedano is a student at Pasadena High School. He founded Project Pleiades with Hugo Morales for the senior defense.");
            break;
        case "projects":
            terminalOutput(command, projects);
            break;
        case "project":
            
            switch(commandArray[1]){

                case projects[0]:
                    terminalOutput(command, "Project Pleiades is");
                    break;
                case projects[1]:
                    terminalOutput(command, "Project Paradox is");
                    break;
                default:
                    terminalOutput(command, "Incorrect syntax usage");


            }
            terminalOutput(command)
            break;


        default:
            terminalOutput(command, "This command does not exist. Type help for a list of supported commands.");

    }


}


function terminalOutput(previousInput, commandOutput){

	var node = document.getElementById("terminal")
	node.appendChild(document.createTextNode(tag + previousInput));
    node.appendChild(document.createElement("br"));

    if (typeof(commandOutput) == "object") {

        for(const [key, value] of Object.entries(commandOutput)) {

            node.appendChild(document.createTextNode(key));
            node.appendChild(document.createElement("br"));
            node.appendChild(document.createTextNode(value));
            node.appendChild(document.createElement("br"));
        }

    } else {

        node.appendChild(document.createTextNode(commandOutput));
        node.appendChild(document.createElement("br"));

    }

	
}

function terminalInput(){
	
    	const textboxLabel = document.createElement("label");
    	textboxLabel.setAttribute("for", "userInput");
   		document.write(tag);
    
    	document.body.appendChild(textboxLabel);
    
    	const input = document.createElement("input");
    	input.setAttribute("type", "text");
    	input.setAttribute("id", "userInput");
    	
    
    	document.body.appendChild(input);
    	
    	const enterCheck = document.querySelector("input");
		enterCheck.addEventListener("keyup", (event) => {

 	if (event.key === "Enter") {
		command = document.getElementById("userInput").value
		
        executeCommand(command)
		document.getElementById('userInput').value = "";
	}});
    	document.write("<br>");
    	
}

const terminal = terminalInput()