import { CodeBlock, dracula } from "react-code-blocks"

function CodeExamples(){
    const snippet1:any=`fn lexical_analysis(file_name: String) -> Vec<Tokens>{ //Lexer
        let mut program_tokens: Vec<Tokens> = Vec::new(); //List of token found in file
        let mut lexemme_collector: Vec<char> = Vec::new();
        println!("; Processing Input File {}", file_name);
        let contents = fs::read_to_string(file_name).expect("Error: File could Not be Read");
        let input: Vec<char> = contents.chars().filter(|c| !c.is_whitespace()).collect();
       for lexemme in input {
            match lexemme{
                '=' => { let lexemme_collector_string: String = lexemme_collector.iter().collect();
                        if !lexemme_collector.is_empty() {program_tokens.push(lookup_multichar_token(lexemme_collector_string));}
                        program_tokens.push(Tokens::Assign);
                        lexemme_collector.clear();
                        continue;
                    },
                ';' => {let lexemme_collector_string: String = lexemme_collector.iter().collect();
                        if !lexemme_collector.is_empty() {program_tokens.push(lookup_multichar_token(lexemme_collector_string));}
                        program_tokens.push(Tokens::Semicolon);
                        lexemme_collector.clear();
                        continue;
                        },
                ':' => {let lexemme_collector_string: String = lexemme_collector.iter().collect();
                        if !lexemme_collector.is_empty() {program_tokens.push(lookup_multichar_token(lexemme_collector_string));}
                        program_tokens.push(Tokens::Colon);
                        lexemme_collector.clear();
                        continue;
                        },
                ',' => {let lexemme_collector_string: String = lexemme_collector.iter().collect();
                        if !lexemme_collector.is_empty() {program_tokens.push(lookup_multichar_token(lexemme_collector_string));}
                        program_tokens.push(Tokens::Comma);
                        lexemme_collector.clear();
                        continue;
                        },
                '.' => {let lexemme_collector_string: String = lexemme_collector.iter().collect();
                        if !lexemme_collector.is_empty() {program_tokens.push(lookup_multichar_token(lexemme_collector_string));}
                        program_tokens.push(Tokens::Period);
                        lexemme_collector.clear();
                        continue;
                        },
                '(' => {let lexemme_collector_string: String = lexemme_collector.iter().collect();
                        if !lexemme_collector.is_empty() {program_tokens.push(lookup_multichar_token(lexemme_collector_string));}
                        program_tokens.push(Tokens::LParen);
                        lexemme_collector.clear();
                        continue;
                        },
                ')' => {let lexemme_collector_string: String = lexemme_collector.iter().collect();
                        if !lexemme_collector.is_empty() {program_tokens.push(lookup_multichar_token(lexemme_collector_string));}
                        program_tokens.push(Tokens::RParen);
                        lexemme_collector.clear();
                        continue;
                        },
                 _  => {},
            }
            if lexemme.is_ascii_digit() {
               lexemme_collector.push(lexemme);
            }
            else if lexemme.is_ascii_lowercase() {
                lexemme_collector.push(lexemme);
            }
            else{
                let mut error_string: String = "Lexical Error: ".to_string();
                error_string.push(lexemme);
                panic!("{}", error_string);
            }
        }
        return program_tokens;
    }`
    const snippet2:any=`// Gale Shapley Algorithm
    public static void pairPeople(ArrayList<StableMatching> men,ArrayList<StableMatching> women){
            int freeMen=5;
    
            while(freeMen >0){
                for(StableMatching woman:women){
                    int indexOfCurrWoman = women.indexOf(woman);
                    
                    for(int i=0; i<5;i++){
                        if(woman.partner!=""){
                            break;
                        }
                        
                        StableMatching manTemp= new StableMatching();
                        for(StableMatching man:men){
                            if(man.name.equals(woman.partnerPriority.get(i))){
                                manTemp=man;
                                
                            }
                        }
                        int indexOfCurrMan=men.indexOf(manTemp);
                        
                        if(manTemp.partner == "" ){
                            
                            women.get(indexOfCurrWoman).updatePartner(manTemp.name);
                            woman.updatePartner(manTemp.name);
                            men.get(indexOfCurrMan).updatePartner(woman.name);
                            manTemp.updatePartner(woman.name);
                            freeMen--;
                        }
                        else{
                        
                            if(manTemp.partnerPriority.indexOf(woman.name)<manTemp.partnerPriority.indexOf(manTemp.partner)){
                            int indexofCurrPartner=0;
                            for(StableMatching womanTemp:women){
                                if (womanTemp.name == manTemp.partner){
                                    indexofCurrPartner=women.indexOf(womanTemp);
                                }
                            }
                            StableMatching womanTemp= women.get(indexofCurrPartner);
                            womanTemp.updatePartner("");
                            women.get(indexOfCurrWoman).updatePartner(manTemp.name);
                            woman.updatePartner(manTemp.name);
                            men.get(indexOfCurrMan).updatePartner(woman.name);
                            manTemp.updatePartner(woman.name);
                            }
                        
                        }
                    
    
                    }
                }
            }
    
            for(StableMatching woman:women){
                System.out.println(woman.name +" & "+ woman.partner);
            }
    
        }`
    const snippet3:any=`//Iterative vs. Recursive runtimes research code
    public class recursivevsiterative {
    
    
      
        static double IterativeCall(double base, int exponent) {
            double retVal = 1.0;
            if(exponent < 0){
                return (1.0/IterativeCall(base, -exponent));
            }
            else{
                for(int i=0; i< exponent;i++){
                    retVal*=base;
                }
            }
            return retVal;
        }
    
        static double RecursiveCall(double base, int exponent) {
            if(exponent <0){
                return (1.0/IterativeCall(base, -exponent));
            }
            else if(exponent==0){
                return 1.0;
            }
            else{
                return (base * RecursiveCall(base, exponent-1));
            }
        }
    
      public static void main(String[] args) throws IOException {
        double base = 3.14159265359;
        int exponent = 1000;
        long iterativeStartTime;
        long iterativeEndTime;
        long recursiveStartTime;
        long recursiveEndTime;
        BufferedWriter outputfile = new BufferedWriter(new FileWriter("data.csv"));
        List<String> data = new ArrayList<String>();
        
        System.out.println("beginning test");
        for(int i=0; i<= exponent;i++){
            iterativeStartTime = System.nanoTime();
            IterativeCall(base, i);
            iterativeEndTime = System.nanoTime();
            recursiveStartTime = System.nanoTime();
            RecursiveCall(base, i);
            recursiveEndTime = System.nanoTime();
            long iterativeNet=iterativeEndTime-iterativeStartTime;
            long recursiveNet = recursiveEndTime-recursiveStartTime;
            data.add(new String(i + "," + iterativeNet +"," + recursiveNet));
        }
        System.out.println("finished test");
        for(String d:data){
            outputfile.write(d);
            outputfile.newLine();
        }
        outputfile.close();
      }
    }`
    const snippet4:any=`def CreateCourseSchedule(coursesAvailable, maxCredits = 15, currQuarter = '1'):
    coursesTaken = ['Math Placement Test Level A']
    quarterCounter = 1
    schedulefile = open("CourseSchedule.txt","w")
    while len(coursesAvailable) != 0:
      coursesInCurrQuarter =[]
      currQuarterCredits = 0
      for course in coursesAvailable:
        if currQuarter in course.offering:
          if all( item in coursesTaken for item in course.prqs) or ("" in course.prqs):
            if (currQuarterCredits + course.credits) > maxCredits:
              break
            currQuarterCredits += course.credits
            coursesTaken.append(course.code)
            coursesInCurrQuarter.append(course)
      for course in coursesInCurrQuarter:
        coursesAvailable.remove(course)
      if currQuarter == '3':
        schedulefile.write("\nSpring Quarter (Quarter ")
        schedulefile.write(str(quarterCounter))
        schedulefile.write(") Credit amount: ")
        schedulefile.write(str(currQuarterCredits))
        schedulefile.write("\n")
        for course in coursesInCurrQuarter:
          schedulefile.write(course.code)
          schedulefile.write(" ")
        quarterCounter +=1
        currQuarter = '1'
      elif currQuarter == '2':
        schedulefile.write("\nWinter Quarter (Quarter ")
        schedulefile.write(str(quarterCounter))
        schedulefile.write(") Credit amount: ")
        schedulefile.write(str(currQuarterCredits))
        schedulefile.write("\n")
        for course in coursesInCurrQuarter:
          schedulefile.write(course.code)
          schedulefile.write(" ")
        quarterCounter +=1
        currQuarter = '3'
      else:
        schedulefile.write("\nAutumn Quarter (Quarter ")
        schedulefile.write(str(quarterCounter))
        schedulefile.write(") Credit amount: ")
        schedulefile.write(str(currQuarterCredits))
        schedulefile.write("\n")
        for course in coursesInCurrQuarter:
          schedulefile.write(course.code)
          schedulefile.write(" ")
        quarterCounter +=1
        currQuarter = '2'
  `
    
    return(
       <>
        <div style={{fontFamily: "consolas"}}>
            <h2>Rust compiler lexical analyzer</h2>
            <CodeBlock text={snippet1} customStyle={{
          height: '250px',
          overflowY: 'scroll',
          margin: '0px 0.75rem',
          borderRadius: '5px',
          boxShadow: '1px 2px 3px rgba(0,0,0,0.35)',
          fontSize: '0.75rem',
          
        }} showLineNumbers wrapLongLines theme={dracula} language="rust" />
        </div>
        <div style={{fontFamily: "consolas"}}>
            <h2> Java Gale Shapley Algorithm</h2>
            <CodeBlock text={snippet2} customStyle={{
          height: '250px',
          overflowY: 'scroll',
          margin: '0px 0.75rem',
          borderRadius: '5px',
          boxShadow: '1px 2px 3px rgba(0,0,0,0.35)',
          fontSize: '0.75rem',
        }} showLineNumbers wrapLongLines theme={dracula} language="java"/>
        </div>
        <div style={{fontFamily: "consolas"}}>
            <h2> Java Iterative vs. Recursive runtimes research code</h2>
            <CodeBlock text={snippet3}customStyle={{
          height: '250px',
          overflowY: 'scroll',
          margin: '0px 0.75rem',
          borderRadius: '5px',
          boxShadow: '1px 2px 3px rgba(0,0,0,0.35)',
          fontSize: '0.75rem',
        }} showLineNumbers wrapLongLines theme={dracula} language="java"/>
        </div>
        <div style={{fontFamily: "consolas"}}>
            <h2>Python Course Schedule Creator</h2>
            <CodeBlock text={snippet4} customStyle={{
          height: '250px',
          overflowY: 'scroll',
          margin: '0px 0.75rem',
          borderRadius: '5px',
          boxShadow: '1px 2px 3px rgba(0,0,0,0.35)',
          fontSize: '0.75rem',
        }} showLineNumbers wrapLongLines theme={dracula} language="python"/>
        </div>
       </> 
    )
}
export default CodeExamples