"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_markdown_1 = require("react-markdown");
const ChatMessage = ({ content, isUser }) => {
    const initials = isUser ? "You" : "Ai";
    // Use green for user, blue for AI
    const bgColor = isUser ? "bg-gray-500" : "bg-purple-500";
    return (<div className="my-4">
      {isUser ? (<div className="flex items-start space-x-2">
          <div className={`w-10 h-10 flex-shrink-0 flex items-center font-semibold justify-center ${bgColor} rounded-full text-white`}>
            {initials}
          </div>

          <div className="bg-gray-100 p-3 rounded-lg shadow-md flex-grow">
            <div className="text-gray-600 break-words text-wrap">
              <react_markdown_1.default className="prose">{content}</react_markdown_1.default>
            </div>
          </div>
          <div className="w-10 h-10"></div>
        </div>) : (<div className="flex items-start space-x-2">
          <div className="w-10 h-10"></div>
          <div className="bg-white p-3 rounded-lg shadow-md flex-grow">
            <div className="text-gray-600 break-words text-wrap">
              <react_markdown_1.default className="prose">{content}</react_markdown_1.default>
            </div>
          </div>
          <div className={`w-10 h-10 flex-shrink-0  font-semibold flex items-center justify-center ${bgColor} rounded-full text-white`}>
            {initials}
          </div>
        </div>)}
    </div>);
};
exports.default = ChatMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhdE1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDaGF0TWVzc2FnZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBMEI7QUFDMUIsbURBQXNDO0FBT3RDLE1BQU0sV0FBVyxHQUErQixDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7SUFDdEUsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN2QyxrQ0FBa0M7SUFDbEMsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQztJQUV6RCxPQUFPLENBQ0wsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FDbkI7TUFBQSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FDUixDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsNEJBQTRCLENBQ3pDO1VBQUEsQ0FBQyxHQUFHLENBQ0YsU0FBUyxDQUFDLENBQUMsMEVBQTBFLE9BQU8sMEJBQTBCLENBQUMsQ0FFdkg7WUFBQSxDQUFDLFFBQVEsQ0FDWDtVQUFBLEVBQUUsR0FBRyxDQUVMOztVQUFBLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxnREFBZ0QsQ0FDN0Q7WUFBQSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMscUNBQXFDLENBQ2xEO2NBQUEsQ0FBQyx3QkFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSx3QkFBUSxDQUNqRDtZQUFBLEVBQUUsR0FBRyxDQUNQO1VBQUEsRUFBRSxHQUFHLENBQ0w7VUFBQSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsR0FBRyxDQUNsQztRQUFBLEVBQUUsR0FBRyxDQUFDLENBQ1AsQ0FBQyxDQUFDLENBQUMsQ0FDRixDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsNEJBQTRCLENBQ3pDO1VBQUEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEdBQUcsQ0FDaEM7VUFBQSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsNkNBQTZDLENBQzFEO1lBQUEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLHFDQUFxQyxDQUNsRDtjQUFBLENBQUMsd0JBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsd0JBQVEsQ0FDakQ7WUFBQSxFQUFFLEdBQUcsQ0FDUDtVQUFBLEVBQUUsR0FBRyxDQUNMO1VBQUEsQ0FBQyxHQUFHLENBQ0YsU0FBUyxDQUFDLENBQUMsMkVBQTJFLE9BQU8sMEJBQTBCLENBQUMsQ0FFeEg7WUFBQSxDQUFDLFFBQVEsQ0FDWDtVQUFBLEVBQUUsR0FBRyxDQUNQO1FBQUEsRUFBRSxHQUFHLENBQUMsQ0FDUCxDQUNIO0lBQUEsRUFBRSxHQUFHLENBQUMsQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsa0JBQWUsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuXG5pbnRlcmZhY2UgQ2hhdE1lc3NhZ2VQcm9wcyB7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgaXNVc2VyOiBib29sZWFuO1xufVxuXG5jb25zdCBDaGF0TWVzc2FnZTogUmVhY3QuRkM8Q2hhdE1lc3NhZ2VQcm9wcz4gPSAoeyBjb250ZW50LCBpc1VzZXIgfSkgPT4ge1xuICBjb25zdCBpbml0aWFscyA9IGlzVXNlciA/IFwiWW91XCIgOiBcIkFpXCI7XG4gIC8vIFVzZSBncmVlbiBmb3IgdXNlciwgYmx1ZSBmb3IgQUlcbiAgY29uc3QgYmdDb2xvciA9IGlzVXNlciA/IFwiYmctZ3JheS01MDBcIiA6IFwiYmctcHVycGxlLTUwMFwiO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJteS00XCI+XG4gICAgICB7aXNVc2VyID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgc3BhY2UteC0yXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy0xMCBoLTEwIGZsZXgtc2hyaW5rLTAgZmxleCBpdGVtcy1jZW50ZXIgZm9udC1zZW1pYm9sZCBqdXN0aWZ5LWNlbnRlciAke2JnQ29sb3J9IHJvdW5kZWQtZnVsbCB0ZXh0LXdoaXRlYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aW5pdGlhbHN9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIHAtMyByb3VuZGVkLWxnIHNoYWRvdy1tZCBmbGV4LWdyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBicmVhay13b3JkcyB0ZXh0LXdyYXBcIj5cbiAgICAgICAgICAgICAgPE1hcmtkb3duIGNsYXNzTmFtZT1cInByb3NlXCI+e2NvbnRlbnR9PC9NYXJrZG93bj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTEwXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IHNwYWNlLXgtMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTEwXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTMgcm91bmRlZC1sZyBzaGFkb3ctbWQgZmxleC1ncm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgYnJlYWstd29yZHMgdGV4dC13cmFwXCI+XG4gICAgICAgICAgICAgIDxNYXJrZG93biBjbGFzc05hbWU9XCJwcm9zZVwiPntjb250ZW50fTwvTWFya2Rvd24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2B3LTEwIGgtMTAgZmxleC1zaHJpbmstMCAgZm9udC1zZW1pYm9sZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciAke2JnQ29sb3J9IHJvdW5kZWQtZnVsbCB0ZXh0LXdoaXRlYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aW5pdGlhbHN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRNZXNzYWdlO1xuIl19