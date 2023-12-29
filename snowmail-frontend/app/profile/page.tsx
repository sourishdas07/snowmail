import HomeSidebar from '../../components/Sidebar'
import Contact from './editcontact/contact';
import Education from './editeducation/education';
import Name from './editname/name';
import Portfolio from './editportfolio/portfolio';
import Resume from './editresume/resume';
import Skills from './editskills/skills';

export default function UserProfile() {
    return (
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-1">
            <HomeSidebar />
          </div>
          <div className="col-span-5">
            <div className="flex flex-col space-y-3 pt-3 px-10">
              <div>
                <Name />
              </div>
              <div>
                <Education />
              </div>
              <div>
                <Resume />
              </div>
              <div>
                <Contact />
              </div>
              <div>
                <Portfolio />
              </div>
              <div>
                <Skills />
              </div>
            </div>
          </div>
        </div>
      );
}
