(function (root, factory) {
  const engine = factory();
  if (typeof module === 'object' && module.exports) module.exports = engine;
  root.PortfolioQuery = engine;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const data = {
    profile: [
      { id:'profile', title:'Khalid Ghanem', location:'Calgary, Alberta', roles:'Forward-Deployed Engineer · AI Solutions Architect', contact:'ghanemkhal@gmail.com', description:'I deliver systems from the first client conversation through production: discovery, engineering, project management, documentation, and handover. 5+ deployments across enterprise and SMB environments, including multi-million-dollar companies. Beyond work: 21+ years of martial arts, Hapkido and Brazilian Jiu-Jitsu black belts, and a grappling coach. Open to remote work in the US and Canada; Canadian citizen, TN-eligible.', section:'about', tags:'architect engineer python ai agents Calgary remote delivery deployments documentation clients SOW QAQC milestones ticketing tagging handover' }
    ],
    projects: [
      { id:'email-agent', title:'Custom knowledge UI & RAG agent', status:'Production', company:'Bison & Bird', tech:'Claude API, TypeScript, GCP Cloud Run, Firebase, n8n, RAG', description:'Shipped solo in 3 weeks for a multi-million-dollar luxury travel company, with a custom knowledge-base editor on Firebase Hosting and RAG deployed on GCP Cloud Run. Drafts a reply in ~1 minute versus the team’s typical 24-hour turnaround; a human sends it. Estimated ~57 hours/week saved, valued at ~$88k/year, for 20 planners at ~850 emails/week (conservative estimates of saved time). 44 golden and 27 adversarial evaluation cases; PII redaction recall ≥0.96 against a 0.90 bar. Sole architect and client contact: SOW, weekly delivery meetings, 4 presentations, 9 feedback fixes in 6 days, QA/QC and architecture docs, 4 operations manuals, 5 budget guides, and migration into client-owned accounts.', section:'work', tags:'email travel production evaluation guardrails PII GCP Claude RAG TypeScript time saved' },
      { id:'grappletrak', title:'GrappleTrak', status:'Production', company:'GrappleTrak', tech:'FastAPI, React, AI agents', description:'Founded and run a multi-tenant SaaS for combat-sports academies: 2 paying academies serving ~500 students. Model routing reduced token cost by ~70%.', section:'work', url:'https://grappletrak.com', tags:'SaaS production Python FastAPI React academy students token cost' },
      { id:'sop-audit', title:'SOP audit agent', status:'Client deployment', company:'Clarity Analytics', tech:'AWS Bedrock, AI agents, guardrails', description:'Built a Bedrock agent that audits controlled SOPs against Visio process maps covering $400M+ in sales, acquisitions, and government contracts. A senior manufacturing executive reports saving ~20 hours/week. The implementation includes 124 tests and 11 false-positive traps.', section:'work', tags:'SOP Visio manufacturing AWS Bedrock audit guardrails test' },
      { id:'bedrock-rag', title:'Multi-tenant RAG platform', status:'Production', company:'Bison & Bird', tech:'AWS Bedrock, RAG, multi-tenancy', description:'Designed and deployed the multi-tenant Amazon Bedrock platform end to end: 3-day PoC followed by 2 more weeks to production. Validated feasibility with the CEO, CRO, and COO. A one-week rework enabled 15-minute client-run onboarding; estimated ~$2.60 to onboard and ~$20/month to run.', section:'work', tags:'AWS Bedrock RAG production onboarding platform multi tenant timeline speed three days two weeks' },
      { id:'enlightened', title:'Dermatology SaaS architecture', status:'Architecture & implementation', company:'Clarity Analytics', tech:'AWS, HIPAA, SOC 2, cost modeling', description:'Authored solution architecture for a multi-tenant AWS platform for 15+ clinics: roadmap, cost model, and HIPAA/SOC 2 planning for Enlightened Informatics. Implementation by another builder. The builder reached a verified readiness gate in 10 days against a four-week estimate; the cost model matched the actual bill within range. Retired a ~CAD $38k/year Shopify Plus line, eliminating that platform expense.', section:'work', tags:'AWS architecture healthcare dermatology SaaS HIPAA SOC 2 cost model savings Shopify' }
    ],
    experience: [
      { id:'bison', title:'Solutions Architect / Forward Deployed Engineer', company:'Bison & Bird', dates:'May 2026–present', description:'Led client-facing discovery, architecture, production delivery, evaluation, documentation, and handover for an AI email agent; also deployed a Bedrock multi-tenant RAG platform.', section:'experience', tags:'AI agents GCP AWS Claude RAG' },
      { id:'clarity', title:'Founder & Engineer', company:'Clarity Analytics', dates:'Mar 2026–present', description:'Founded Clarity Analytics, an independent engineering and consulting practice. Client discovery, scoping, business decisions, deployed document automation, and solution architecture for a multi-tenant healthcare SaaS for 15+ clinics.', section:'experience', tags:'AWS Bedrock agent HIPAA SOC 2' },
      { id:'grappletrak-role', title:'Founder & Engineer', company:'GrappleTrak', dates:'Mar 2026–present', description:'Built and run a multi-tenant agentic SaaS serving 2 paying academies and ~500 students.', section:'experience', tags:'Python FastAPI React SaaS' },
      { id:'ibm', title:'Lead Data Analyst (contract)', company:'IBM (via TES)', dates:'Mar–May 2026', description:'Co-led 12 analysts on OPOR, the Oracle Health transition described by Nova Scotia Health as the largest healthcare transformation project in Nova Scotia’s history. Finished a week early through twice-daily stand-ups with PMs and government officials. Validated 100,000+ records at a 0.8% error rate; the validation guide was adopted by all 72 analysts.', section:'experience', tags:'SQL data validation pandas Oracle Health OPOR healthcare transition lead analyst' },
      { id:'recovery', title:'Epic (Connect Care) Super User — Clinical Informatics', company:'Recovery Alberta', dates:'Dec 2023–present', description:'Trained ~33 clinicians and ran PHI-compliant documentation QA, reducing documentation from 3–4 hours to ~30 minutes per session.', section:'experience', tags:'healthcare clinical informatics Epic PHI' },
      { id:'cgc', title:'Operations Supervisor', company:'CGC Ltd.', dates:'Jan 2012–Aug 2023', description:'Ran up to 10 crews, owned pricing at 35%+ margins, and held Cardel Homes’ primary-contractor contract for about 10 years through annual re-bids.', section:'experience', tags:'operations delivery management' }
    ],
    skills: [
      { id:'ai', title:'AI & LLM', category:'AI', description:'Claude API, LLMs, machine learning, kNN, vector embeddings, AI agents, multi-agent systems, MCP, RAG, LLM evaluation, LLM-as-judge, guardrails, PII redaction', section:'toolbox', tags:'agent Claude RAG evaluation' },
      { id:'cloud', title:'Cloud & infrastructure', category:'Cloud', description:'AWS Bedrock, Lambda, API Gateway, SQS, RDS, KMS, WAF, Route 53; GCP Cloud Run; Firebase; Terraform; Docker; AWS and GCP cloud architecture and cost optimization', section:'toolbox', tags:'AWS GCP Cloud Run Bedrock Docker Firebase' },
      { id:'languages', title:'Languages & data', category:'Languages & Data', description:'Python, TypeScript, SQL, FastAPI, Pydantic, React, PostgreSQL, pgvector, Supabase, n8n, GitHub Actions, Databricks; IBM watsonx.data and watsonx.governance technical essentials', section:'toolbox', tags:'Python SQL TypeScript React PostgreSQL' },
      { id:'delivery', title:'Delivery & consulting', category:'Delivery', description:'Technical discovery, solution architecture, end-to-end ownership, technical leadership, client and team leadership, client interaction, stakeholder management, SOWs, ADRs, deliverables, QA/QC, milestones, ticketing and tagging, project management, documentation, release management, migration and handover, cost modeling and optimization, HIPAA and SOC 2 planning', section:'toolbox', tags:'program management architecture delivery' }
    ],
    education: [
      { id:'athabasca', title:'BSc, Computing & Information Systems Management', school:'Athabasca University', dates:'Expected Dec 2026', description:'In progress.', section:'credentials', tags:'computing university' },
      { id:'calgary', title:'BA, Sociology', school:'University of Calgary', dates:'2022', description:'Completed in 2022.', section:'credentials', tags:'degree university' }
    ],
    certifications: [
      { id:'claude-dev', title:'Claude Certified Developer — Foundations', status:'Earned', description:'Earned certification.', section:'credentials', tags:'Anthropic Claude certification' },
      { id:'scrum', title:'Professional Scrum Master I (PSM I)', status:'Earned', description:'Earned certification.', section:'credentials', tags:'PSM agile certification' },
      { id:'databricks', title:'Academy Accreditation – AWS Databricks Platform Architect', status:'Earned', description:'Databricks-issued academy accreditation, August 2026.', section:'credentials', tags:'Databricks AWS platform architect accreditation' },
      { id:'aws-progress', title:'AWS Solutions Architect — Associate', status:'In progress', description:'SAA-C03; in progress.', section:'credentials', tags:'AWS certification' },
      { id:'claude-architect-progress', title:'Claude Certified Architect — Professional', status:'In progress', description:'In progress.', section:'credentials', tags:'Claude certification' }
    ],
    contact: [
      { id:'email', title:'Email', value:'ghanemkhal@gmail.com', description:'Email Khalid directly.', section:'contact', url:'mailto:ghanemkhal@gmail.com', tags:'contact email' },
      { id:'linkedin', title:'LinkedIn', value:'linkedin.com/in/khalid-ghanem1', description:'Professional profile.', section:'contact', url:'https://linkedin.com/in/khalid-ghanem1', tags:'contact linkedin' },
      { id:'github', title:'GitHub', value:'github.com/kghanem-dev', description:'Code profile.', section:'contact', url:'https://github.com/kghanem-dev', tags:'contact github' }
    ]
  };
  const tables = ['profile','projects','experience','skills','education','certifications','contact'];
  const aliases = {project:'projects',skill:'skills',certification:'certifications',credential:'certifications',job:'experience',roles:'profile'};
  const normalize = value => String(value || '').toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
  const columns = { profile:['title','location','roles','contact','description'], projects:['title','status','company','tech','description'], experience:['title','company','dates','description'], skills:['title','category','description'], education:['title','school','dates','description'], certifications:['title','status','description'], contact:['title','value','description'] };
  const sectionNames = {about:'Profile',work:'Deployments & founder work',experience:'Experience',toolbox:'Toolbox',credentials:'Credentials',contact:'Contact'};
  function matches(row, term) { const hay = normalize([row.title,row.description,row.company,row.tech,row.status,row.category,row.school,row.value,row.tags].join(' ')); return normalize(term).split(' ').every(word => hay.includes(word)); }
  function formatResult(rows, answer, mode, extra={}) { return {mode, answer, results:rows.slice(0,8), count:rows.length, ...extra}; }
  function error(mode, message) { return {mode, error:message, answer:'', results:[], count:0}; }
  function selectTable(raw) { const name=normalize(raw); return aliases[name] || name; }
  function sql(query) {
    const match = query.match(/^\s*select\s+(.+?)\s+from\s+([a-z_]+)(?:\s+where\s+([a-z_]+)\s*(=|like)\s*(['"])(.*?)\5)?\s*;?\s*$/i);
    if (!match) return error('SQL-style','Unsupported SQL. Try SELECT title, status FROM projects WHERE status = \'Production\';');
    const [,fields,rawTable,whereField,op,,value]=match;
    const table=selectTable(rawTable);
    if (!tables.includes(table)) return error('SQL-style',`Unknown table “${rawTable}”. Use: ${tables.join(', ')}.`);
    const selected=fields.trim()==='*' ? columns[table] : fields.split(',').map(x=>x.trim().toLowerCase());
    if (!selected.length || selected.some(x=>!columns[table].includes(x))) return error('SQL-style',`Supported columns for ${table}: ${columns[table].join(', ')}.`);
    if (whereField && !columns[table].includes(whereField.toLowerCase())) return error('SQL-style',`Unsupported WHERE column. Use: ${columns[table].join(', ')}.`);
    if (query.length>500 || value?.length>100) return error('SQL-style','Query is too long. Please narrow it.');
    let rows=data[table];
    if (whereField) rows=rows.filter(row=>{const cell=String(row[whereField.toLowerCase()]||'');if(op.toLowerCase()==='=')return normalize(cell)===normalize(value);const escaped=value.replace(/[.*+?^${}()|[\]\\]/g,'\\$&').replace(/%/g,'.*').replace(/_/g,'.');return new RegExp('^'+escaped+'$','i').test(cell);});
    return formatResult(rows,`${rows.length} ${table} record${rows.length===1?'':'s'} matched.`, 'SQL-style',{columns:selected});
  }
  function python(query) {
    const q=query.trim().replace(/;$/,'');
    const property=q.match(/^profile(?:\.(location|roles|contact))?$/i);
    if (property){ const row=data.profile[0];const field=property[1]?.toLowerCase();return formatResult([row],field ? row[field] : row.description,'Python-style'); }
    const call=q.match(/^([a-z_]+)\((.*)\)$/is);
    if (!call) return error('Python-style','Unsupported Python-style query. Try projects(), skills(category="Cloud"), search("Python"), or help().');
    let name=selectTable(call[1]), args=call[2].trim();
    if (name==='help' && !args) return {mode:'Python-style',help:true,answer:'Supported queries',results:[],count:0};
    if (name==='clear' && !args) return {mode:'Python-style',clear:true,answer:'Results cleared.',results:[],count:0};
    if (name==='search') {
      const arg=args.match(/^(['"])(.*?)\1$/s);
      if (!arg || arg[2].length>100) return error('Python-style','Use search("keyword") with a quoted term of 100 characters or fewer.');
      return searchAll(arg[2],'Python-style');
    }
    if (!tables.includes(name) || name==='profile') return error('Python-style','Unknown function. Try projects(), skills(), experience(), education(), certifications(), contact(), search("Python"), or help().');
    if (!args) return formatResult(data[name],`${data[name].length} ${name} record${data[name].length===1?'':'s'}.`,'Python-style');
    const arg=args.match(/^([a-z_]+)\s*=\s*(['"])(.*?)\2$/s);
    if (!arg || arg[3].length>100) return error('Python-style','Use one quoted filter, such as projects(status="Production") or skills(category="Cloud").');
    const field=arg[1].toLowerCase(), value=arg[3];
    const allowed={projects:['status','search','tech'],skills:['category','search'],experience:['company','search'],education:['school','search'],certifications:['status','search'],contact:['search']}[name];
    if (!allowed.includes(field)) return error('Python-style',`Supported ${name} filters: ${allowed.join(', ')}.`);
    const rows=data[name].filter(row=>field==='search'||field==='tech' ? matches(row,value) : normalize(row[field]).includes(normalize(value)));
    return formatResult(rows,`${rows.length} ${name} record${rows.length===1?'':'s'} matched.`,'Python-style');
  }
  function searchAll(query, mode='English') {
    const term=normalize(query);if (!term) return error(mode,'Enter a question or keyword.');
    const words=term.split(' ').filter(w=>w.length>1 && !['what','show','have','tell','about','does','with','where','which','your','you','the','and','are','how','can','me','do','is'].includes(w));
    const rows=tables.flatMap(t=>data[t]).map(row=>({row,score:words.reduce((n,w)=>n+(matches(row,w)?1:0),0)})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).map(x=>x.row);
    return formatResult(rows,rows.length?`${rows.length} portfolio match${rows.length===1?'':'es'} for “${query}”.`:'Not found in the portfolio. Try a project, skill, company, or credential.',mode);
  }
  function english(query){
    const q=normalize(query);
    if (/\b(help|examples|how to query)\b/.test(q)) return {mode:'English',help:true,answer:'Supported queries',results:[],count:0};
    if (/\b(where|based|location)\b/.test(q)||/\bwhere\b.*\blive\b/.test(q)) return formatResult(data.profile,'Calgary, Alberta. Open to remote work in the US and Canada.','English');
    if (/\b(contact|reach|linkedin|github)\b/.test(q)||/\bemail\b.*\b(address|you|khalid|contact)\b/.test(q)) return formatResult(data.contact,'Email Khalid at ghanemkhal@gmail.com, or connect on LinkedIn and GitHub.','English');
    if (/\b(experience|career|jobs|employment|timeline)\b/.test(q)) return formatResult(data.experience,'Experience spans AI architecture and delivery, independent consulting, product engineering, clinical informatics, data migration, and operations.','English');
    if (/\b(profile|about khalid|about you)\b/.test(q)||q==='about') return formatResult(data.profile,data.profile[0].description,'English');
    if (/\b(certif|credential)\w*/.test(q)) return formatResult(data.certifications,'Three featured earned credentials; AWS Solutions Architect — Associate and Claude Certified Architect — Professional are in progress.','English');
    if (/\b(education|degree|university|study|school)\b/.test(q)) return formatResult(data.education,'BSc in progress at Athabasca University (expected Dec 2026); BA Sociology from the University of Calgary (2022).','English');
    if (/\b(ibm|oracle|records|analyst)\b/.test(q)) return formatResult([data.experience[3]],data.experience[3].description,'English');
    if (/\b(cost|financial|money|dollar|annual)\b/.test(q) && /\b(saving|savings|save|saved|reduce|reduced)\b/.test(q) && !/\b(email|travel|planner|grappletrak|healthcare|shopify|dermatology)\b/.test(q)) return formatResult([data.projects[4],data.projects[0],data.projects[1]],'Healthcare SaaS: retired a ~CAD $38k/year Shopify Plus line. GCP agent: ~57 hours/week of saved time valued at ~$88k/year, conservatively estimated. GrappleTrak: model routing reduced token cost by ~70%. Operating-cost estimates are separate from savings.','English');
    if (/\b(time|hours|save|savings)\b/.test(q)&&/\b(email|agent|travel|planner)\b/.test(q)) return formatResult([data.projects[0]],'The email agent is estimated to save ~57 hours/week, valued at ~$88k/year, for 20 planners at ~850 emails/week. These are conservative estimates of saved time.','English');
    if (/\b(production|live|shipped)\b/.test(q)) {const rows=data.projects.filter(x=>x.status==='Production');return formatResult(rows,'The GCP knowledge UI and email agent, AWS multi-tenant RAG platform, and GrappleTrak are in production. The AWS document audit agent is client-deployed.','English');}
    if (/\b(skill|stack|tools|technolog|language|python|sql)\w*/.test(q)&&!/\b(project|built|work)\w*/.test(q)) return formatResult(data.skills,'Core tools include Python, TypeScript, SQL, AWS Bedrock, GCP Cloud Run, FastAPI, React, PostgreSQL, RAG, and LLM evaluation.','English');
    if (/\b(aws|bedrock|cloud|gcp)\b/.test(q)&&/\b(project|built|work)\w*/.test(q)) {const provider=/\b(aws|bedrock)\b/.test(q)?'AWS':/\bgcp\b/.test(q)?'GCP':null;const rows=data.projects.filter(x=>provider?matches(x,provider):matches(x,'AWS')||matches(x,'GCP'));return formatResult(rows,`${rows.length} cloud-related projects in the portfolio.`,'English');}
    if (/\b(python)\b/.test(q)&&/\b(project|built|work)\w*/.test(q)) return formatResult([data.projects[1]],'GrappleTrak uses FastAPI (Python) and React.','English');
    if (/\b(project|built|portfolio|work)\w*/.test(q)) return formatResult(data.projects,'Selected work includes a production email agent, GrappleTrak, a Bedrock SOP auditor, a production multi-tenant RAG platform, and healthcare SaaS architecture.','English');
    return searchAll(query);
  }
  function query(input){const q=String(input||'').trim();if (!q)return error('English','Enter a question or keyword.');if(q.length>500)return error('English','Query is too long. Please narrow it.');if(/^select\b/i.test(q))return sql(q);if(/^(profile(?:\.|$)|[a-z_]+\s*\()/i.test(q))return python(q);return english(q);}
  return {data,query,sectionNames};
});
