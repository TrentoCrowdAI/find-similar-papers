This file has the task of giving the possibility to find similar papers by reference.

The steps are:
1. receive the xml file with the data of the papers;
2. read the xml file;
3. check if there is papers in the xml file
4. Create a list with paper's title with its authors and publication date
5. take the first title of the list of the paper;
6. search the paper in Scopus;
7. Find the papers in the reference;
8. Find the paper in the reference of the reference of the original paper until there is different papers in the reference;
9. If there is no different papers in the reference then go to the xml file and cancel the title of the list;
10. Return to point 4
